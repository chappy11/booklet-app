import { FirebaseCollection } from "../types/FirebaseCollection.enum"
import { StudentPayload } from "../types/schema.type"
import { addCollection } from "../utils/firebase.utils"

export const createStudent = async (payload: StudentPayload) => {
  const resp = await addCollection(FirebaseCollection.STUDENT, payload)

  return resp
}
