"use client"

import { Button, DropDown, TextInput } from "@/app/_lib/components"
import { GenderDropDownData } from "@/app/_lib/constant/gender"
import { getAllYearLevel } from "@/app/_lib/constant/yearlevel"
import useGetAllCourses from "@/app/_lib/hooks/useGetAllCourses"
import useGetAllSemeseter from "@/app/_lib/hooks/useGetAllSemester"
import { createStudent } from "@/app/_lib/services/Student.service"
import { ButtonType } from "@/app/_lib/types/ButtonType.enum"
import { DropDownType } from "@/app/_lib/types/DropDownType.type"
import { Routes } from "@/app/_lib/types/route.enum"
import {
  CourseType,
  SemesterInterface,
  StudentPayload,
} from "@/app/_lib/types/schema.type"
import { isNumeric } from "@/app/_lib/utils/string.utils"
import React, { useMemo, useState } from "react"
import { toast } from "react-toastify"

export default function CreateStudent() {
  const [idNo, setIdNo] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [middlename, setMiddlename] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const { data: semesters } = useGetAllSemeseter()
  const { data: courses } = useGetAllCourses()
  const [selectedSemester, setSelectedSemester] =
    useState<SemesterInterface | null>(null)
  const [selectCourses, setSelectedCourses] = useState<CourseType | null>(null)
  const [selectedGender, setSelectedGender] = useState<string>("")
  const [selectedYearLevel, setSelectedYearLevel] = useState<string>("")
  const [birthdate, setBirthdate] = useState<string>("")

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

  const isValidData = () => {
    let isValid = true
    if (!idNo) {
      toast.error("ID No. is Required")
      isValid = false
      return
    }

    if (!isNumeric(idNo)) {
      toast.error("ID No. should be numeric")
      isValid = false
      return
    }
    if (!firstName) {
      toast.error("Firstname is Required")
      isValid = false
      return
    }

    if (!middlename) {
      toast.error("Middlename is Required")
      isValid = false
      return
    }

    if (!lastname) {
      toast.error("Lastname is Required")
      isValid = false
      return
    }

    if (!birthdate) {
      toast.error("Birthdate is Required")
      isValid = false
      return
    }

    if (!selectedGender) {
      toast.error("Gender is Required")
      isValid = false
      return
    }

    if (!selectedYearLevel) {
      toast.error("Year Level is Required")
      isValid = false
      return
    }

    if (!selectedSemester) {
      toast.error("Semester is Required")

      return
    }

    if (!selectCourses) {
      toast.error("Courses is Required")

      return
    }

    return isValid
  }

  async function submit() {
    if (!isValidData()) {
      return
    }
    const lastnameSliced = lastname.slice(0, 4)
    const idNumberSliced = idNo.slice(0, 4)
    try {
      const payload: StudentPayload = {
        idNo,
        firstname: firstName.toUpperCase(),
        middlename: middlename.toUpperCase(),
        lastname: lastname.toUpperCase(),
        courseId: selectCourses?.id as string,
        semesterId: selectedSemester?.id as string,
        yearLevel: selectedYearLevel,
        isFirstLogin: true,
        password: lastnameSliced.toUpperCase() + idNumberSliced.toUpperCase(),
        birthdate: birthdate,
        gender: selectedGender,
        dateCreated: new Date().toString(),
      }
      const resp = await createStudent(payload)

      if (!resp) {
        return
      }

      toast.success("Success Added", {
        autoClose: 2000,
      })

      setTimeout(() => {
        window.location.href = Routes.STUDENTS
      }, 3000)
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="  w-full  flex flex-1 h-100  justify-center items-center">
      <div className=" w-1/2 bg-white bg-opacity-50 px-8 py-5 m-auto h-full rounded-lgZ">
        <h1 className=" text-lg ">Student Information</h1>
        <div className=" flex flex-col gap-6 ">
          <TextInput
            value={idNo}
            placeholder="Enter ID No."
            onChange={setIdNo}
            label="ID No."
            maxLength={6}
          />
          <div className=" flex flex-row gap-5">
            <TextInput
              value={firstName}
              placeholder="Enter Firstname"
              onChange={setFirstName}
              label="Firstname"
            />
            <TextInput
              value={middlename}
              placeholder="Enter Middlename"
              onChange={setMiddlename}
              label="Middlename"
            />
            <TextInput
              value={lastname}
              placeholder="Enter Lastname"
              onChange={setLastname}
              label="Lastname"
            />
          </div>
          <div className=" flex flex-row gap-5">
            <TextInput
              type="date"
              label="Birthdate"
              onChange={setBirthdate}
              value={birthdate}
              placeholder="Birthdate"
            />
            <DropDown
              label="Gender"
              data={GenderDropDownData}
              onChange={setSelectedGender}
              placeholder="Choose Gender"
              value={selectedGender ?? "Select Gender"}
            />
          </div>

          <div className=" flex flex-row gap-5">
            <DropDown
              label="Year Level"
              placeholder="Choose Year Level"
              data={getAllYearLevel as DropDownType[]}
              onChange={setSelectedYearLevel}
              value=""
            />
            <DropDown
              label={"Semester"}
              placeholder="Choose Semester"
              data={semesterData as DropDownType[]}
              onChange={onChangeSelectSemester}
              value={
                selectedSemester
                  ? selectedSemester.semesterType
                  : "Choose Semester"
              }
            />
          </div>

          <DropDown
            label={"Course"}
            placeholder="Choose Course"
            data={courseData as DropDownType[]}
            onChange={onChangeSelectCourses}
            value={
              selectCourses ? selectCourses.courseName || "" : "Choose Course"
            }
          />
          <div className=" mt-5 flex justify-end flex-row gap-5">
            <div className=" w-fit ">
              <Button title="Back To Student" type={ButtonType.OUTLINED} />
            </div>
            <div className=" w-fit ">
              <Button title="Submit" onClick={() => submit()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
