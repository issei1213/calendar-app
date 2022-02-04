import { Injectable } from '@nestjs/common';
// import { CalendarModel, converter } from './calendar.model';
import { firestore } from '../firebase/initialize';
import admin from 'firebase-admin';

const collectionRef = firestore.collection('calendars');

@Injectable()
export class CalendarsService {
  async findAllDocId(): Promise<string[]> {
    const docRef = await collectionRef.get();
    const snapshots = docRef.docs;
    return snapshots.map((item) => {
      return item.id;
    });
  }

  async create(): Promise<{ id: string }> {
    const docId = collectionRef.doc().id;
    await collectionRef.doc(docId).set({
      created_at: admin.firestore.FieldValue.serverTimestamp(),
      updated_at: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { id: docId };
  }
}
