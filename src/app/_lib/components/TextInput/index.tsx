import React from 'react'

type Props = {
    placeholder:string;
    value:string;
    onChange:(e:string)=>void;
}


export default function TextInput(props:Props) {
    const {placeholder,value,onChange} = props;
  return (
     <input placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)} className=' outline-none px-3 py-1 rounded-xl text-slate-600 bg-white bg-opacity-35 border border-white w-full placeholder-slate-500'/>
  )
}
