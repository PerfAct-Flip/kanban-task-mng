import Dexie, { Table } from "dexie"
import { Task } from "@/types/task"

class KanbanDB extends Dexie {
    tasks!: Table<Task, string>

    constructor() {
        super("kanban-db")
        this.version(3).stores({
            tasks: "id, status, order, completed, createdAt",
        })
    }
}

export const db = new KanbanDB()
