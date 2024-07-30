import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore"
import { FirebaseCollection } from "../types/FirebaseCollection.enum"
import { SemesterInterface, SemesterPayload } from "../types/schema.type"
import { addCollection } from "../utils/firebase.utils"
import { db } from "../config/firebase"

export async function createSemester(data: SemesterPayload) {
  const resp = await addCollection(FirebaseCollection.SEMESTER, data)

  return resp
}

export async function getAllSemester(): Promise<SemesterInterface[]> {
  const qry = query(
    collection(db, FirebaseCollection.SEMESTER),
    orderBy("dateCreated", "desc")
  )
  const querySnapShot = await getDocs(qry)

  let arr: SemesterInterface[] = []

  querySnapShot.forEach((val) => {
    arr.push({ id: val.id as string, ...(val.data() as SemesterInterface) })
  })

  return arr
}

export async function getSemesterById(id: string) {
  const query = await getDoc(doc(db, FirebaseCollection.SEMESTER, id))

  return {
    id: query.id,
    ...query.data(),
  }
}
