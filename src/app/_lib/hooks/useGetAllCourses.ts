import { useCallback, useEffect, useState } from "react"
import { CourseType } from "../types/schema.type"
import { toast } from "react-toastify"
import { getCourses } from "../services/Course.service"

export default function useGetAllCourses() {
  const [data, setData] = useState<CourseType[]>([])

  const sendRequest = useCallback(async () => {
    try {
      toast.loading("Loading...")
      const resp = await getCourses()
      setData(resp.data)
      toast.dismiss()
    } catch (error) {
      console.log("ERROR", error)
      toast.error("Something went wrong")
    }
  }, [])

  useEffect(() => {
    sendRequest()
  }, [])

  return {
    data,
  }
}
