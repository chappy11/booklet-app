import { DropDownType } from "../../types/DropDownType.type";

type Props = {
    label:string;
    data:Array<DropDownType>
    onChange:(e:string)=>void;
    value:string;
    placeholder?:string;
}

export default function DropDown(props:Props){
    const {label,data,onChange,value,placeholder} = props;

    return(
        <>
            <label className=" text-sm text-white mx-2">{label}</label>
            <select onChange={(e)=>onChange(e.target.value)} className=" outline-none px-3 py-1 rounded-xl text-slate-600 bg-white bg-opacity-35 border border-white w-full placeholder-slate-500"  >
                <option value={""}>{placeholder??""}</option>
                {data.map(val=>{
                    return <option key={val.value} value={val.value}>{val.label}</option>
                })}
            </select>
        </>
    );
}
