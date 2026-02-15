"use client"

import { useState } from "react"
import { ColumnType, Task } from "@/types/task"

interface AddTaskFormProps {
    column: ColumnType
    onSubmit: (task: Task) => void
    onCancel: () => void
}

export function AddTaskForm({ column, onSubmit, onCancel }: AddTaskFormProps) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!title.trim()) {
            setError("Title is required")
            return
        }

        onSubmit({
            id: crypto.randomUUID(),
            title,
            description,
            status: column.id,
            completed: false,
            priority: "low",
            createdAt: new Date(),
        })

        setTitle("")
        setDescription("")
        setError("")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-2 flex flex-col gap-2 bg-muted p-3 rounded-md border border-border"
        >
            <h3 className="text-sm font-medium">
                Add task
            </h3>

            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded px-2 py-1 text-sm"
            />

            <textarea
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border rounded px-2 py-1 text-sm resize-none"
                rows={3}
            />

            {error && <p className="text-xs text-red-500">{error}</p>}

            <div className="flex gap-2 justify-end">
                <button
                    type="button"
                    onClick={onCancel}
                    className="text-sm px-3 py-1 border rounded"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="text-sm px-3 py-1 bg-blue-500 text-white rounded"
                >
                    Add
                </button>
            </div>
        </form>
    )
}
