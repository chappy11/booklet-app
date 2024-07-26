import React from 'react'
import CreateCourse from '../course/@CreateCourse/page'
import CreateSemester from './@CreateSemester/page'
import SemesterData from './@SemesterData/page'
import { PageParams } from '@/app/_lib/types/PageParams.type'

export default function Semester(params:PageParams) {
  const {page} = params.searchParams
  return (
    <div className=' w-full flex flex-row gap-10'>
      <CreateSemester/>
      <SemesterData currentPage={parseInt(page)}/>
    </div>
  )
}
