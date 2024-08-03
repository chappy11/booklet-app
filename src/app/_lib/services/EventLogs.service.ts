import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../config/firebase"
import { FirebaseCollection } from "../types/FirebaseCollection.enum"
import {
  EventInterface,
  EventLogsInterface,
  EventLogsResponse,
} from "../types/schema.type"
import { getEventById } from "./Event.service"

export const getEventLogByStudentId = async (
  id: string
): Promise<EventLogsResponse[]> => {
  const qry = query(
    collection(db, FirebaseCollection.EVENT_LOGS),
    where("studentId", "==", id)
  )

  const querySnapShot = await getDocs(qry)

  let arr: any[] = []

  for (const doc of querySnapShot.docs) {
    const logsData = doc.data() as EventLogsInterface
    const event: EventInterface = await getEventById(logsData.eventID)
    const payload: EventLogsResponse = {
      id: doc.id,
      event: event,
      ...(doc.data() as EventLogsInterface),
    }

    arr.push(payload)
  }

  return arr
}
