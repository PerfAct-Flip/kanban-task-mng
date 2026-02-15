import { Task } from "@/types/task"

export type TaskState = {
  tasks: Task[]
  loading: boolean
}

export type Action =
  | { type: "LOAD_START" }
  | { type: "LOAD_SUCCESS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
