"use client";

type Props = {
    title:string;
    onClick?:()=>void;
};


export default function Button(props:Props) {  
  const {title,onClick} = props;
  return (
    <button onClick={()=>onClick?.()} className=' p-3 hover:bg-green-300 w-full bg-green-700 text-white'>{title}</button>
  )
}
