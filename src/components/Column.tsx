"use client"

import { useState } from "react"
import { ColumnType, Task } from "@/types/task"
import { TaskCard } from "./TaskCard"
import { AddTaskForm } from "./AddTaskForm"

// import {useDroppable} from '@dnd-kit/react';
// import {CollisionPriority} from '@dnd-kit/abstract';

interface ColumnProps {
    id: string
    column: ColumnType
    tasks: Task[]
    onAddTask: (task: Task) => void
    onDeleteTask: (id: string) => void
    onEditTask: (task: Task) => void

    onDropTask: (columnId: string) => void
    onDragStart: (taskId: string) => void
}



import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Column({ id, column, tasks, onAddTask, onDeleteTask, onEditTask, onDropTask, onDragStart }: ColumnProps) {
    const [isAdding, setIsAdding] = useState(false)

    function handleSubmit(task: Task) {
        onAddTask(task)
        setIsAdding(false)
    }

    const [isOver, setIsOver] = useState(false)

    return (
        <div
            className={`
        flex flex-1 flex-col p-3 rounded-xl min-h-[500px] border-2 border-dashed
        transition-all duration-300
        ${isOver ? "bg-primary/5 border-primary/50 shadow-inner" : "bg-transparent border-transparent"}
      `}
            onDragOver={(e) => {
                e.preventDefault()
                setIsOver(true)
            }}
            onDragLeave={() => setIsOver(false)}
            onDrop={() => {
                setIsOver(false)
                onDropTask(column.id)
            }}
        >
            <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                    <h2 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">{column.title}</h2>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground font-medium">
                        {tasks.length}
                    </span>
                </div>
                {!isAdding && (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg"
                        onClick={() => setIsAdding(true)}
                    >
                        <Plus className="w-4 h-4" />
                    </Button>
                )}
            </div>

            <div className="flex flex-col gap-3 flex-1">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onDelete={onDeleteTask}
                        onEdit={onEditTask}
                        onDragStart={onDragStart}
                    />
                ))}

                {tasks.length === 0 && !isAdding && (
                    <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-border/40 rounded-xl p-8 text-center bg-muted/10">
                        <p className="text-xs text-muted-foreground font-medium italic">Drop tasks here or add new</p>
                    </div>
                )}

                {isAdding && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                        <AddTaskForm
                            column={column}
                            onSubmit={handleSubmit}
                            onCancel={() => setIsAdding(false)}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
