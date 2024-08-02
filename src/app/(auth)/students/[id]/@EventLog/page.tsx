import { TableHeader } from '@/app/_lib/components'
import React from 'react'

export default function EventLog() {
  return (
    <div className=' w-full'>
         <table className="min-w-full text-left text-sm whitespace-nowrap">
        <thead className="uppercase tracking-wider border-b border-b-white bg-white bg-opacity-80">
          <tr>
            <TableHeader>Eventname</TableHeader>
            <TableHeader>Morning In</TableHeader>
            <TableHeader>Morning Out</TableHeader>
            <TableHeader>Afternoon In</TableHeader>
            <TableHeader>Afternoon Out</TableHeader>
          </tr>
        </thead>
        </table>
    </div>
  )
}
