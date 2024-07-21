export enum Routes {
    LOGIN = '/login',
    DASHBOARD = '/',
    STUDENTS = '/students',
    EVENTS='/events'
}

export interface RouteInterface  {
    name:string;
    url:string;
}