import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore"
import { FirebaseCollection } from "../types/FirebaseCollection.enum"
import { CoursePayload, CourseType } from "../types/schema.type"
import { addCollection } from "../utils/firebase.utils"
import { db } from "../config/firebase"

export const createCourse = async (payload: CoursePayload) => {
  const resp = await addCollection(FirebaseCollection.COURSE, payload)

  return resp
}

export const getCourses = async () => {
  const qry = query(
    collection(db, FirebaseCollection.COURSE),
    orderBy("dateCreated", "desc")
  )
  const querySnapShot = await getDocs(qry)

  let data: CourseType[] = []

  querySnapShot.forEach((val) => {
    data.push({ id: val.id as string, ...(val.data() as CourseType) })
  })

  return {
    data,
    length: data.length,
  }
}

export async function getCourseById(id: string):Promise<CourseType> {
  const query = await getDoc(doc(db, FirebaseCollection.COURSE, id))

  const response:CourseType = {
    id: query.id,
    ...query.data() as CourseType,
  }

  return response;
 
}
