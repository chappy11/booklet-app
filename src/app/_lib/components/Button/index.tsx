"use client";

type Props = {
    title:string;
    onClick?:()=>void;
};


export default function Button(props:Props) {  
  const {title,onClick} = props;
  return (
    <button onClick={()=>onClick?.()} className=' p-3 hover:bg-green-300 w-full max-h-16 bg-[#304F66] text-white rounded-md'>{title}</button>
  )
}
