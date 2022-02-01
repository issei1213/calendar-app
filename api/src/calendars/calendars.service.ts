import { Injectable } from '@nestjs/common';
// import { CalendarModel, converter } from './calendar.model';
import { firestore } from '../firebase/initialize';

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
}
