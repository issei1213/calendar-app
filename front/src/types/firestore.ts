import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  collection,
  FirestoreDataConverter,
  getFirestore,
  QueryDocumentSnapshot,
  WithFieldValue,
} from 'firebase/firestore';

export interface Event {
  title: string;
  date: string;
}

// export const converter = <T>(): FirestoreDataConverter<T> => ({
//   toFirestore: (data: WithFieldValue<T>) => data,
//   fromFirestore: (snapshot: QueryDocumentSnapshot<T>) => {
//     const data = snapshot.data();
//     Object.keys(data).forEach((key) => {
//       if (
//         typeof data[key].toString == 'function' &&
//         data[key].toString().startsWith('Timestamp')
//       ) {
//         // firestoreのtimestamp型は扱いにくいのでdate型に変更させる
//         data[key] = data[key].toDate();
//       }
//     });
//
//     return data;
//   },
// });
