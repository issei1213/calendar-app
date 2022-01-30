import {
  collection,
  doc,
  onSnapshot,
  query,
  QueryDocumentSnapshot,
  WithFieldValue,
} from 'firebase/firestore';
import { db } from './repository';
import dayjs from 'dayjs';
import { Event } from '@/types/firestore';
import firebase from 'firebase/compat';
import QuerySnapshot = firebase.firestore.QuerySnapshot;

export default {
  onSnapshotGet() {
    onSnapshot(
      query(collection(db, 'calendars/K4u1P3lDe0AwJFNAJzV7/events')),
      (snapshots) => {
        return snapshots.docs.map((item) => {
          return {
            title: item.data().title,
            date: dayjs(item.data().date.toDate()).format('YYYY-MM-DD'),
          };
        });
      },
    );
  },
};
