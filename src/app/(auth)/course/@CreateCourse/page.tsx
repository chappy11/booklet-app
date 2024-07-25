"use client"

import { Button, TextInput } from "@/app/_lib/components"
import { createCourse } from "@/app/_lib/services/Course.service"
import { CoursePayload } from "@/app/_lib/types/schema.type"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
export default function CreateCourse() {
  const [courseCode, setCourseCode] = useState<string>("")
  const [courseName, setCourseName] = useState<string>("")

  const router = useRouter()

  async function handleSubmit() {
    try {
      
      if(!courseCode){
        toast.error("Course Code is Required");
        return;
      }

      if(!courseName){
        toast.error("Course Name is Required");
        return;
      }
      
      toast.loading("Loading..");

      const payload: CoursePayload = {
        courseCode,
        courseName,
        dateCreated: new Date().toString(),
      }
      const resp = await createCourse(payload)
      toast.dismiss();
      toast.success("Successfully Added",{
        autoClose:2000
      })
      setCourseCode("")
      setCourseName("")
      router.refresh()
    
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  return (
    <div className=" flex flex-row gap-10 mt-10">
      <TextInput
        placeholder="Course Code"
        value={courseCode}
        onChange={setCourseCode}
      />
      <TextInput
        placeholder="Course Name"
        value={courseName}
        onChange={setCourseName}
      />
      <Button title="Submit" onClick={() => handleSubmit()} />
    </div>
  )
}
