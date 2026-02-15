import { db } from "./storage"
import { Task } from "@/types/task"
export async function getAllTasks(): Promise<Task[]> {
  return db.tasks.toArray()
}
export async function addTask(task: Task): Promise<void> {
  await db.tasks.add(task)
}
export async function updateTask(task: Task): Promise<void> {
  await db.tasks.put(task)
}
export async function deleteTask(id: string): Promise<void> {
  await db.tasks.delete(id)
}

export async function getTasksByColumn(columnId: string): Promise<Task[]> {
  return db.tasks
    .where("status")
    .equals(columnId)
    .sortBy("createdAt")
}
