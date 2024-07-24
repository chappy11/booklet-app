export type CourseType =  {
    id?:string;
    courseCode:string;
    courseName:string;
    dateCreated:string;
}

export type CoursePayload = Omit<CourseType,"id">;
