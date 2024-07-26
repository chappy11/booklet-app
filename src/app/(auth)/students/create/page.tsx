"use client"

import { DropDown, TextInput } from "@/app/_lib/components"
import { GenderDropDownData } from "@/app/_lib/constant/gender"
import useGetAllCourses from "@/app/_lib/hooks/useGetAllCourses"
import useGetAllSemeseter from "@/app/_lib/hooks/useGetAllSemester"
import { DropDownType } from "@/app/_lib/types/DropDownType.type"
import { CourseType, SemesterInterface } from "@/app/_lib/types/schema.type"
import React, { useMemo, useState } from "react"

export default function CreateStudent() {
  const [firstName, setFirstName] = useState<string>("")
  const { data: semesters } = useGetAllSemeseter()
  const { data: courses } = useGetAllCourses()
  const [selectedSemester, setSelectedSemester] =
    useState<SemesterInterface | null>(null)
  const [selectCourses, setSelectedCourses] = useState<CourseType | null>(null)
  const [selectedGender, setSelectedGender] = useState<string>("")

  const semesterData = useMemo(() => {
    if (!semesters) {
      return []
    }
    return semesters.map((val) => {
      return {
        label: val.semesterType,
        value: val.id,
      }
    })
  }, [semesters])

  const courseData = useMemo(() => {
    if (!courses) {
      return []
    }

    return courses.map((val) => {
      return {
        label: val.courseName,
        value: val.id,
      }
    })
  }, [courses])

  const onChangeSelectSemester = (e: string) => {
    const filterItem = semesters.filter((val) => val.id === e)[0]

    setSelectedSemester(filterItem)
  }

  const onChangeSelectCourses = (courseId: string) => {
    const filterItem = courses.filter((val) => val.id === courseId)[0]

    setSelectedCourses(filterItem)
  }

  return (
    <div className=" flex w-full">
      <div className=" w-1/2 bg-white bg-opacity-50 p-8 m-auto">
        <h1 className=" text-lg ">Student Information</h1>
        <div className=" h-10" />
        <div className=" flex flex-col gap-6">
          <TextInput
            value={firstName}
            placeholder="ID No."
            onChange={setFirstName}
          />
          <div className=" flex flex-row gap-5">
            <TextInput
              value={firstName}
              placeholder="Firstname"
              onChange={setFirstName}
            />
            <TextInput
              value={firstName}
              placeholder="Middlename"
              onChange={setFirstName}
            />
            <TextInput
              value={firstName}
              placeholder="Lastname"
              onChange={setFirstName}
            />
          </div>
          <DropDown
            label={""}
            placeholder="Choose Semester"
            data={semesterData as DropDownType[]}
            onChange={onChangeSelectSemester}
            value={
              selectedSemester
                ? selectedSemester.semesterType
                : "Choose Semester"
            }
          />
          <DropDown
            label={""}
            placeholder="Choose Courses"
            data={courseData as DropDownType[]}
            onChange={onChangeSelectCourses}
            value={
              selectCourses ? selectCourses.courseName || "" : "Choose Course"
            }
          />
          <DropDown
            data={GenderDropDownData}
            onChange={setSelectedGender}
            value={selectedGender ?? "Select Gender"}
          />
        </div>
      </div>
    </div>
  )
}
