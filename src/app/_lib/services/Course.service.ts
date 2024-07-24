import { collection, getDocs, query } from "firebase/firestore"
import { FirebaseCollection } from "../types/FirebaseCollection.enum"
import { CoursePayload, CourseType } from "../types/schema.type"
import { addCollection } from "../utils/firebase.utils"
import { db } from "../config/firebase"

export const createCourse = async (payload: CoursePayload) => {
  const resp = await addCollection(FirebaseCollection.COURSE, payload)

  return resp
}

export const getCourses = async () => {
  const qry = query(collection(db, FirebaseCollection.COURSE))
  const querySnapShot = await getDocs(qry)

  let data: CourseType[] = []

  querySnapShot.forEach((val) => {
    data.push({ id: val.id as string, ...(val.data() as CourseType) })
  })

  return data
}
