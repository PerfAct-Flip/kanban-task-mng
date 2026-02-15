import { ColumnType } from "@/types/task";
interface ColumnProps {
    column: ColumnType;
}

export function AddTaskForm({ column }: ColumnProps) {
    return (
        <div>
            <h2>Add Task as {column.title}</h2>
        </div>
    );
}