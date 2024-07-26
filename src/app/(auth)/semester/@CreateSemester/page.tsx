"use client";

import { Button,  Card,  DropDown,  TextInput } from "@/app/_lib/components"
import { SEMESTERTYPE } from "@/app/_lib/constant/semestertype"
import { createSemester } from "@/app/_lib/services/Semester.service";
import { DropDownType } from "@/app/_lib/types/DropDownType.type"
import { SemesterPayload } from "@/app/_lib/types/schema.type";
import { SemesterType } from "@/app/_lib/types/SemesterType.type";
import React, { useState } from "react"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"

const semesterDropDown:DropDownType[] = SEMESTERTYPE.map(val=>{
  return {
    label:val.name,
    value:val.id
  }
})

export default function CreateSemester() {
  const [semesterData,setSemesterData] = useState<SemesterType | null>();
  const [dateStart,setDateStart] = useState<string>("");
  const [dateEnd,setDateEnd] = useState<string>("");
  
  const router = useRouter();
  
  const onChangeSemester = (e:string)=>{
    if(e === ""){
      setSemesterData(null);
      return;
    }
    const filteredData:SemesterType = SEMESTERTYPE.filter(val=>val.id === e)[0];
    setSemesterData(filteredData)
  } 

  async function handleSubmit(){
    try {
      if(!isValidData()){
        return;
      } 
      toast.loading("Loading...")
      const payload:SemesterPayload = {
        semesterType:semesterData? semesterData.name : "",
        dateCreated:new Date().toString(),
        dateStart:dateStart,
        dateEnd
      }

      const resp = await createSemester(payload);

      if(!resp){
        return;
      }
      toast.dismiss();
      toast.success("Successfully Added");
      setDateEnd("")
      setDateStart("")
      setSemesterData(null);
      router.refresh();
   

    } catch (error) {
      toast.error("Something went wrong");      
    }
    



  }

  function isValidData(){
    let isValid = false;

    if(!semesterData){
      toast.error("Semester Name is Required");
      isValid = false;
    }
    else if(!dateStart){
      toast.error("Date Start is Required");
      isValid = false;
    }
    else if(!dateEnd){
      toast.error("Date End is Required");
      isValid = false;
    }
    else{
      isValid = true;
    }

    return isValid;
  }
return (
    <div className=" w-[40%]">
          <DropDown 
          data={semesterDropDown} 
          label="Semester" 
          onChange={onChangeSemester} 
          value={semesterData ? semesterData.name:""}
          placeholder="Choose Semester"
        />
        <div className="h-5"/>
      <TextInput type="date" onChange={setDateStart} placeholder={"Choose Date"} value={dateStart} label=" Start Date"/>
      <div className="h-5"/>
        <TextInput type="date" onChange={setDateEnd} placeholder={"Choose Date"} value={dateEnd} label=" End Date"/>
        <div className="h-10"/>
        <Button title="Submit" onClick={()=>handleSubmit()}/>
    </div>
  )
}
