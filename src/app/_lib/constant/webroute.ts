import { RouteInterface, Routes } from "../types/route.enum";

export const webroutes: RouteInterface[] = [
  {
    name: "Dashboard",
    url: Routes.DASHBOARD,
  },
  {
    name: "Course",
    url: `${Routes.COURSE}?page=1`,
  },
  {
    name: "Semester",
    url: `${Routes.SEMESTER}?page=1`,
  },
  {
    name: "Students",
    url: `${Routes.STUDENTS}?page=1`,
  },
  {
    name: "Events",
    url: Routes.EVENTS,
  },
]
