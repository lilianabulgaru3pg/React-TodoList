import { Firebase } from "./firebaseConfig";
import "firebase/firestore";

export const Firestore = Firebase.firestore();
// Disable deprecated features
Firestore.settings({
  timestampsInSnapshots: true
});

export const postData = (collection, data) => {
  return Firestore.collection(collection).add(data);
};

export const getData = (collection, doc) => {
  return Firestore.collection(collection)
    .doc(doc)
    .get();
};

export const addDocumentListener = (collection, doc, cb) => {
  console.log("aici");
  var path = `${doc}.items`;
  return Firestore.collection(collection)
    .where(doc, "==", true)
    .where(path, "==", true)
    .onSnapshot(cb);
};

export const addListener = (collection, condition, cb) => {
  return Firestore.collection(collection)
    .where(...condition)
    .onSnapshot(docs => {
      cb(docs);
    });
};

export const putData = (collection, doc, data) => {
  return Firestore.collection(collection)
    .doc(doc)
    .update(data);
};
