"use client"

import { useEffect, useReducer, useState } from "react"

import { COLUMNS } from "@/utils/constants"

import { Task, ColumnType } from "@/types/task"
import { taskReducer, initialState } from "@/store/taskReducer"
import { getAllTasks, addTask, deleteTask, updateTask } from "@/lib/taskService"

import { Column } from "./Column"
// import {DragDropProvider, DragEndEvent} from '@dnd-kit/react';

export function Board() {
    const [state, dispatch] = useReducer(taskReducer, initialState)
    const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null)

    useEffect(() => {
        async function load() {
            dispatch({ type: "LOAD_START" })
            const tasks = await getAllTasks()
            dispatch({ type: "LOAD_SUCCESS", payload: tasks })
        }
        load()
    }, [])


    function handleDragStart(taskId: string) {
        setDraggedTaskId(taskId)
    }


    async function handleDrop(columnId: string) {
        if (!draggedTaskId) return

        const task = state.tasks.find((t) => t.id === draggedTaskId)
        if (!task || task.status === columnId) return

        const updatedTask: Task = { ...task, status: columnId }

        dispatch({ type: "UPDATE_TASK", payload: updatedTask })
        await updateTask(updatedTask)

        setDraggedTaskId(null)
    }
    async function handleAddTask(task: Task) {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title: task.title,
            description: task.description,
            status: task.status,
            completed: false,
            priority: task.priority || "low",
            createdAt: new Date(),
        }

        await addTask(newTask)
        dispatch({ type: "ADD_TASK", payload: newTask })
    }

    async function handleDeleteTask(id: string) {
        await deleteTask(id)                 // 1️⃣ DB update
        dispatch({ type: "DELETE_TASK", payload: id }) // 2️⃣ state update
    }

    async function handleEditTask(updatedTask: Task) {
        await updateTask(updatedTask) // 1️⃣ update DB
        dispatch({ type: "UPDATE_TASK", payload: updatedTask }) // 2️⃣ update UI
    }

    if (state.loading) {
        return <div className="p-6 text-center">Loading board...</div>
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 w-full h-full items-start overflow-x-auto pb-4">
            {COLUMNS.map((column) => {
                const columnTasks = state.tasks.filter(
                    (task) => task.status === column.id
                )

                return (
                    <div
                        key={column.id}
                        className="flex flex-col shrink-0 w-full md:flex-1 md:w-auto md:min-w-[320px] p-2 bg-muted/30 border border-border/50 rounded-xl backdrop-blur-sm"
                    >
                        <Column
                            key={column.id}
                            id={column.id}
                            column={column}
                            tasks={columnTasks}
                            onAddTask={handleAddTask}
                            onDeleteTask={handleDeleteTask}
                            onEditTask={handleEditTask}
                            onDragStart={handleDragStart}
                            onDropTask={handleDrop}
                        />

                    </div>
                )
            })}
        </div>
    )
}
