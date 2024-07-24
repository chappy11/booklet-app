import { RouteInterface, Routes } from "../types/route.enum";

export const webroutes:RouteInterface[] = [
    {
        name:'Dashboard',
        url:Routes.DASHBOARD
    },
    {
        name:"Course",
        url:Routes.COURSE
    },
    {
        name:"Semester",
        url:Routes.SEMESTER
    },
    {
        name:'Students',
        url:Routes.STUDENTS
    },
    {
        name:'Events',
        url:Routes.EVENTS
    }
];
