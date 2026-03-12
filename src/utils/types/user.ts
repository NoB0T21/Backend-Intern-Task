export enum Role {
  admin = "admin",
  manager = "manager",
  worker = "worker"
}

export interface User{
    name: string,
    email: string,
    password: string,
    phone: string,
    role?: Role,
}

export interface RUser{
    id:string
    name: string,
    email: string,
    phone: string,
    role: Role,
}