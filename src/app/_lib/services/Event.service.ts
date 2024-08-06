import {
  query,
  collection,
  orderBy,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore"
import { db } from "../config/firebase"
import { FirebaseCollection } from "../types/FirebaseCollection.enum"
import {
  EventInterface,
  EventPayload,
  EventResponse,
  SemesterInterface,
} from "../types/schema.type"
import { addCollection } from "../utils/firebase.utils"
import { getSemesterById } from "./Semester.service"

export const createEvent = async (payload: EventPayload) => {
  const resp = await addCollection(FirebaseCollection.EVENT, payload)

  return resp
}

export const getEvents = async () => {
  const qry = query(
    collection(db, FirebaseCollection.EVENT),
    orderBy("dateCreated", "desc")
  )
  const querySnapShot = await getDocs(qry)

  let arr: EventResponse[] = []

  for (const doc of querySnapShot.docs) {
    const semesterId = doc.data().semesterId
    const semester = await getSemesterById(semesterId)

    const payload: EventResponse = {
      id: doc.id,
      semester: semester,
      ...(doc.data() as EventInterface),
    }

    arr.push(payload)
  }

  return arr
}

export const getEventById = async (id: string) => {
  const query = await getDoc(doc(db, FirebaseCollection.EVENT, id))
  const data = query.data() as EventInterface
  const semesterData = await getSemesterById(data.semesterId as string)

  const payload = {
    id: query.id,
    semester: semesterData,
    ...data,
  }

  return payload
}
