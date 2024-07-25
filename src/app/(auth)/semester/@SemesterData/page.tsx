import { Pagination, TableData, TableHeader, TableRow } from '@/app/_lib/components'
import { getAllSemester } from '@/app/_lib/services/Semester.service'
import { DateFormat } from '@/app/_lib/types/DateFormat.enum';
import { Routes } from '@/app/_lib/types/route.enum';
import { SemesterInterface } from '@/app/_lib/types/schema.type';
import { divideBySets } from '@/app/_lib/utils/data.utils';
import { formatDate } from '@/app/_lib/utils/date.utils';
import React from 'react'

type Props = {
    currentPage:number;
}

export default async function SemesterData(props:Props) {
    const {currentPage} = props;
    const resp = await getAllSemester();
    const dataSet = divideBySets(resp)[currentPage - 1];
    return (
    <div className=' w-full'>
        <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b border-b-white bg-white bg-opacity-80">
                <tr>
                    <TableHeader>Semester</TableHeader>
                    <TableHeader>Date Start</TableHeader>
                    <TableHeader>Date End</TableHeader>
                    <TableHeader>Date Created</TableHeader>
                </tr>
            </thead>
              <tbody className=" w-full">
                {dataSet?.map((val:SemesterInterface,i:number)=>{
                    return (
                        <TableRow key={i.toString()}>
                            <TableData>{val.semesterType}</TableData>
                            <TableData>{formatDate(val.dateStart,DateFormat.FORMAT_DATE)}</TableData>
                            <TableData>{formatDate(val.dateEnd,DateFormat.FORMAT_DATE)}</TableData>
                            <TableData>{formatDate(val.dateCreated,DateFormat.FORMAT_DATE)}</TableData>
                        </TableRow>
                    );
                })}
              </tbody>
        </table>
        <div className=' h-5'/>
        <Pagination currentPage={currentPage} dataCounts={resp.length} baseUrl={Routes.SEMESTER}/>
    </div>
  )
}
