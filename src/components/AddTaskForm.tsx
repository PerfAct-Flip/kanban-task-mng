"use client"

import { useState } from "react"
import { ColumnType, Task } from "@/types/task"

interface AddTaskFormProps {
    column: ColumnType
    onSubmit: (task: Task) => void
    onCancel: () => void
}

import { Button } from "@/components/ui/button"

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
            title: title.trim(),
            description: description.trim(),
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
            className="mt-2 flex flex-col gap-2 bg-muted p-3 rounded-xl border border-border transition-all duration-200"
        >
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80 px-1">
                New Task
            </h3>

            <input
                type="text"
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all duration-200 placeholder:text-muted-foreground/50"
                autoFocus
            />

            <textarea
                placeholder="Add some details..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground resize-none transition-all duration-200 placeholder:text-muted-foreground/50 min-h-[80px]"
                rows={3}
            />

            {error && <p className="text-[10px] text-destructive font-bold uppercase tracking-wider px-1">{error}</p>}

            <div className="flex gap-2 justify-end mt-1">
                <Button
                    type="button"
                    variant="ghost"
                    size="xs"
                    onClick={onCancel}
                    className="text-muted-foreground"
                >
                    Cancel
                </Button>

                <Button
                    type="submit"
                    variant="default"
                    size="xs"
                    className="shadow-lg shadow-primary/20"
                >
                    Create Task
                </Button>
            </div>
        </form>
    )
}
