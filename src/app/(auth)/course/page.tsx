"use client";

import { Button, Card, TableData, TableHeader, TableRow, TextInput } from '@/app/_lib/components'
import { createCourse } from '@/app/_lib/services/Course.service';
import { CoursePayload } from '@/app/_lib/types/schema.type';
import React, { useState } from 'react'

export default function Course() {
    const [courseCode,setCourseCode] = useState<string>("");
    const [courseName,setCourseName] = useState<string>("");

    async function handleSubmit(){
        const payload:CoursePayload = {
            courseCode,
            courseName,
            dateCreated:new Date().toString()
        }
        const resp = await createCourse(payload);

        console.log("TRD",resp);
    }
   return (
    <div className=' flex  flex-1  h-full flex-col'>
        <div className=' flex flex-row gap-10 mt-10'>
            <TextInput placeholder='Course Code' value={courseCode} onChange={setCourseCode} />
            <TextInput placeholder='Course Name' value={courseName} onChange={setCourseName}/>
            <Button title='Submit' onClick={()=>handleSubmit()}/>
        </div>    
        <div className=' h-10'/>
       
       <table className="min-w-full text-left text-sm whitespace-nowrap">
        <thead className="uppercase tracking-wider border-b border-b-white bg-white bg-opacity-80">
          <tr>
            <TableHeader  >
                Course ID
            </TableHeader>

            <TableHeader >
                Course Name
            </TableHeader>
           <TableHeader>
                Date Created
            </TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody className=" w-full">
            <TableRow>
                <TableData>John Rey</TableData>
                <TableData>John Rey</TableData>
                <TableData>John Rey</TableData>
                <TableData><button className=' py-2 px-3 bg-slate-900 text-white rounded-lg'>Update</button></TableData>
            </TableRow>
            <TableRow>
                <TableData>John Rey</TableData>
                <TableData>John Rey</TableData>
                <TableData>John Rey</TableData>
                <TableData>John Rey</TableData>
            </TableRow>
        </tbody>
      </table>
      
    </div>
  )
}
