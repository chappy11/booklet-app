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

export type StudentInterface = {
  id?: string
  idNo: string
  password: string
  firstname: string
  middlename: string
  lastname: string
  courseId: string
  semesterId: string
  birthdate: string
  gender: string
  yearLevel: string
  dateCreated: string
  isFirstLogin?: boolean
}

export type StudentPayload = Omit<StudentInterface, "id">

export type StudentResponse = StudentInterface & {
  semester: SemesterInterface
  course: CourseType
}