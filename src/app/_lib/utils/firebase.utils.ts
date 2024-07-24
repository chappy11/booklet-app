import { DocumentData, addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';


export const addCollection = async <FirestoreDb, T>(dbCollection: FirestoreDb, payload: T) => {
    const response = await addDoc(collection(db, dbCollection as string), payload as DocumentData);

    return response
}
