import Link from 'next/link';
import React from 'react'

type Props = {
    currentPage:number;
    dataCounts:number;
    baseUrl:string;
}


export default function Pagination(props:Props) {
  const {currentPage,dataCounts,baseUrl} = props;
  const getNumberPerPage = dataCounts / 6;
  const numberOfPage = getNumberPerPage > Math.floor(getNumberPerPage) ? Math.floor(getNumberPerPage) + 1 : getNumberPerPage;
  const arrayOfPage = Array.from({length: numberOfPage}, (_, i) => i + 1);
    
  return (
    <div className=' flex flex-row gap-3 mt-2 justify-end'>
        {currentPage > 1 &&
            <Link href={`${baseUrl}?page=${currentPage - 1}`}><p className={` px-3 py-2 rounded-md bg-white bg-opacity-45 text-[#304F66] `}>Prev</p></Link>
        }
        {arrayOfPage.map(val=>(  
        <Link href={`${baseUrl}?page=${val}`}><p className={` px-3 py-2 rounded-md ${currentPage == val ? 'bg-[#304F66] text-white' : 'bg-white bg-opacity-45 text-[#304F66]'}  `}>{val}</p></Link>
        ))}
        {currentPage < numberOfPage &&
        <Link href={`${baseUrl}?page=${currentPage + 1}`}><p className={` px-3 py-2 rounded-md bg-white bg-opacity-45 text-[#272a2c]`}>Next</p></Link>
        }
    </div>
    
  )
}
