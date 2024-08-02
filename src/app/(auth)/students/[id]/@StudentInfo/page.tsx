import { ListItem } from '@/app/_lib/components';
import { DateFormat } from '@/app/_lib/types/DateFormat.enum';
import { StudentResponse } from '@/app/_lib/types/schema.type'
import { formatDate } from '@/app/_lib/utils/date.utils';
import React from 'react'

type Props = {
  student:StudentResponse;
}

export default async function StudentInfo(props:Props) {
  const {firstname,middlename,lastname,course,semester,yearLevel,idNo,gender,birthdate} = props.student;
  return (
    <div className=' w-[40%] py-8 px-5 rounded-md h-full overflow-y-auto bg-white bg-opacity-80'>
        <div className=' w-20 h-20 rounded-full bg-gray-400 m-auto'/>
        <h1 className=' text-center text-slate-600 mt-2 font-semibold text-lg'>{firstname +" "+middlename+" "+lastname}</h1>
        <h2 className=' text-center'>{course.courseName}  {yearLevel}</h2>
        <h2 className=' text-center'>{semester.semesterType}</h2>
        <div className=' flex flex-1 flex-col gap-3 mt-5'>
          <ListItem label='ID NO:' value={idNo} />
          <ListItem label='Gender:' value={gender} />
          <ListItem label='Birthdate:' value={formatDate(birthdate,DateFormat.FORMAT_DATE)} />
          <ListItem label='Course Code' value={course.courseCode+" - "+yearLevel} />
        </div>
    </div>
  )
}
