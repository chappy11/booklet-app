export type CourseType =  {
    id?:string;
    courseCode:string;
    courseName:string;
    dateCreated:string;
}

export type CoursePayload = Omit<CourseType,"id">;

export type SemesterInterface = {
    id?:string;
    semesterType:string;
    dateStart:string;
    dateEnd:string;
    dateCreated:string;
}

export type SemesterPayload = Omit<SemesterInterface,'id'>;
