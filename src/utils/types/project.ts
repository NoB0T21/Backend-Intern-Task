export enum Status {
  planned = "planned",
  active = "active",
  completed = "completed"
}

export interface Project{
    name: string
    description: string
    start_date: string
    end_date: string
    budget: number
    location: string
    created_by: string
    status: Status
}