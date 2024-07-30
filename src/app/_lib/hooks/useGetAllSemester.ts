import { useCallback, useEffect, useState } from "react"
import { SemesterInterface } from "../types/schema.type"
import { toast } from "react-toastify"
import { getAllSemester } from "../services/Semester.service"

export default function useGetAllSemeseter() {
  const [data, setData] = useState<SemesterInterface[]>([])

  const sendRequest = useCallback(async () => {
    try {
      toast.loading("Loading...")
      const resp = await getAllSemester()
      setData(resp)
      toast.dismiss()
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }, [])

  useEffect(() => {
    sendRequest()
  }, [])

  return {
    data,
    setData,
    sendRequest,
  }
}
