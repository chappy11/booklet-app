import { FirebaseCollection } from "../types/FirebaseCollection.enum";
import { CoursePayload } from "../types/schema.type";
import { addCollection } from "../utils/firebase.utils";

export const createCourse = async(payload:CoursePayload) =>{
    const resp = await addCollection(FirebaseCollection.COURSE,payload);

    return resp;
}