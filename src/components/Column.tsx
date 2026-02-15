"use client"

import { ColumnType, Task } from "@/types/task";
import { TaskCard } from "./TaskCard";
import { useState } from "react";
import { AddTaskForm } from "./AddTaskForm";
//temmp tasklist
const tasks: Task[] = [
    {
        id: "1",
        title: "Task 1",
        description: "Description 1",
        status: "todo",
        priority: "low",
    },
    {
        id: "2",
        title: "Task 2",
        description: "Description 2",
        status: "in-progress",
        priority: "medium",
    },
    {
        id: "3",
        title: "Task 3",
        description: "Description 3",
        status: "done",
        priority: "high",
    },
    {
        id: "4",
        title: "Task 4",
        description: "Description 4",
        status: "todo",
        priority: "low",
    },
];
interface ColumnProps {
    column: ColumnType;
}
export function Column({ column }: ColumnProps) {

    const [isAdding, setIsAdding] = useState(false);
    const handleAdd = (columnId: string) => {
        setIsAdding(true);
    }
    return (
        <div>
            <h2>{column.title}</h2>

            {tasks.map((task) => task.status === column.id && <TaskCard key={task.id} task={task} />)}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                    handleAdd(column.id)
                }}>add task</button>
            {isAdding && <AddTaskForm column={column} />}
        </div>
    );
}