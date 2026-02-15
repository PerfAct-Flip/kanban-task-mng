import { ColumnType } from "@/types/task"

export const COLUMNS: ColumnType[] = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
]

export const DEFAULT_PRIORITY = "low"
