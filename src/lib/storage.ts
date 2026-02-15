import Dexie, { Table } from "dexie"
import { Task } from "@/types/task"

class KanbanDB extends Dexie {
  tasks!: Table<Task, string>

  constructor() {
    super("kanban-db")
    this.version(1).stores({
      tasks: "id, status, createdAt",
    })
  }
}

export const db = new KanbanDB()
