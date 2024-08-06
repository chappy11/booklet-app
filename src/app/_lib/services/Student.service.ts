import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore"
import { FirebaseCollection } from "../types/FirebaseCollection.enum"
import { StudentInterface, StudentPayload, StudentResponse } from "../types/schema.type"
import { addCollection } from "../utils/firebase.utils"
import { db } from "../config/firebase"
import { getCourseById } from "./Course.service"
import { getSemesterById } from "./Semester.service"

export const createStudent = async (payload: StudentPayload) => {
  const resp = await addCollection(FirebaseCollection.STUDENT, payload)

  return resp
}

export const getStudents = async () => {
  const qry = query(
    collection(db, FirebaseCollection.STUDENT),
    orderBy("dateCreated", "desc")
  )

  const querySnapShot = await getDocs(qry)

  let data: any[] = []

  for (const doc of querySnapShot.docs) {
    const courseId = doc.data().courseId
    const semesterId = doc.data().semesterId

    const [course, semester] = await Promise.all([
      getCourseById(courseId),
      getSemesterById(semesterId),
    ])

    const payload = {
      id: doc.id,
      course,
      semester,
      ...doc.data(),
    }

    data.push(payload)
  }

  return data
}

export const getStudentById = async(id:string):Promise<StudentResponse>=>{
  const studentData = await getDoc(doc(db,FirebaseCollection.STUDENT,id));
  const student = studentData.data() as StudentInterface;
  const semester = await getSemesterById(student.semesterId);
  const course = await getCourseById(student.courseId);

  const responseData:StudentResponse = {
    id:studentData.id,
    semester:semester,
    course:course,
    ...student as StudentInterface
  }

  return responseData;
}