// interface SnapshotOptions {
//   readonly serverTimestamps?: 'estimate' | 'previous' | 'none';
// }
//
// interface DocumentData {
//   [key: string]: any;
// }
// interface QueryDocumentSnapshot {
//   data(option?: SnapshotOptions): DocumentData;
// }
// type Converter<T> = {
//   fromFirestore(snapshot: QueryDocumentSnapshot, op?: SnapshotOptions): T;
//   toFirestore(model: Partial<T>): DocumentData;
// };
//
// const converter: Converter<Item> = {
//   fromFirestore(ss, op) {
//     return ss.data(op) as Item;
//   },
//   toFirestore(model) {
//     return model;
//   },
// };
