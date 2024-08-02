import { getStudentById } from '@/app/_lib/services/Student.service';
import { PageParams } from '@/app/_lib/types/PageParams.type'
import React from 'react'
import StudentInfo from './@StudentInfo/page';
import EventLog from './@EventLog/page';

type Props = PageParams;

export default async function Student(props:Props) {
    const {id} = props.params;
    const student = await getStudentById(id);
    console.log("Student",student)
    
    return (
    <div className=' w-full h-full flex flex-row gap-5'>
        <StudentInfo student={student}/>
        <EventLog/>
    </div>
  )
}
