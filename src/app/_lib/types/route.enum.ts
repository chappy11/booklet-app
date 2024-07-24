export enum Routes {
    LOGIN = '/login',
    DASHBOARD = '/',
    STUDENTS = '/students',
    EVENTS='/events',
    COURSE='/course',
    SEMESTER='/semester',
}

export interface RouteInterface  {
    name:string;
    url:string;
}
