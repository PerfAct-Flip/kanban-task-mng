"use client"

import { useState, useEffect } from "react"
import { Task } from "@/types/task"
// import {useSortable} from '@dnd-kit/react/sortable';

import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"

import { GripVertical, Trash2, Pencil, Check, X, MoreHorizontal } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function TaskCard({
    task,
    onDelete,
    onEdit,
    onDragStart
}: {
    task: Task
    onDelete: (id: string) => void
    onEdit: (task: Task) => void
    onDragStart: (id: string) => void
}) {
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description ?? "")

    useEffect(() => {
        setTitle(task.title)
        setDescription(task.description ?? "")
    }, [task.title, task.description])
    function handleSave() {
        if (!title.trim()) return

        onEdit({
            ...task,
            title: title.trim(),
            description: task.description,
        })

        setIsEditing(false)
    }

    function handleCancel() {
        setTitle(task.title)
        setDescription(task.description ?? "")
        setIsEditing(false)
    }

    const [isDragging, setIsDragging] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Item
            draggable
            onDragStart={() => {
                setIsDragging(true)
                onDragStart(task.id)
            }}
            onDragEnd={() => setIsDragging(false)}
            className={`
        border-none rounded-lg p-3 shadow-sm mb-2 group
        cursor-grab active:cursor-grabbing
        transition-all duration-200 hover:shadow-md bg-card
        ${isDragging ? "opacity-50 scale-95 shadow-none" : ""}
        ${isExpanded ? "bg-accent/50 shadow-md ring-1 ring-ring" : "bg-card"}
      `}
        >
            <div className="flex flex-col w-full gap-1">
                {isEditing ? (
                    <div className="flex flex-col gap-2">
                        <input
                            className="bg-transparent border-none focus:outline-none focus:ring-0 text-base font-medium w-full p-0 text-foreground placeholder:text-muted-foreground"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Task title"
                            autoFocus
                        />
                        <div className="flex gap-2 justify-end pt-2 border-t border-border">
                            <Button size="sm" variant="ghost" onClick={handleSave} className="h-8 px-2 text-primary hover:text-primary hover:bg-accent">
                                Save
                            </Button>
                            <Button size="sm" variant="ghost" onClick={handleCancel} className="h-8 px-2 text-muted-foreground hover:bg-accent">
                                Cancel
                            </Button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div
                            className="flex items-start gap-3 w-full cursor-pointer"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            <div className="mt-0.5" onClick={(e) => e.stopPropagation()}>
                                <button
                                    className={`
                                         w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                                         ${task.completed ? "border-primary bg-primary/20" : "border-muted-foreground hover:border-primary hover:bg-primary/10"}
                                     `}
                                    title={task.completed ? "Mark as incomplete" : "Mark as complete"}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onEdit({ ...task, completed: !task.completed })
                                    }}
                                >
                                    {task.completed && <Check className="w-3 h-3 text-primary" strokeWidth={3} />}
                                </button>
                            </div>

                            <div className="flex-1 flex flex-col gap-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <ItemTitle className={`text-base font-medium leading-tight break-words pr-2 ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                                        {task.title}
                                    </ItemTitle>

                                    <div
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 w-6 p-0 hover:bg-accent rounded-full text-muted-foreground"
                                                >
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-32 p-1 border-border shadow-lg bg-card rounded-lg" align="end">
                                                <div className="flex flex-col gap-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full justify-start h-8 px-2 text-sm font-normal rounded-md hover:bg-accent text-foreground"
                                                        onClick={() => setIsEditing(true)}
                                                    >
                                                        <Pencil className="mr-2 w-3 h-3" />
                                                        Edit Name
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full justify-start h-8 px-2 text-sm font-normal text-destructive hover:text-destructive hover:bg-destructive/10 rounded-md"
                                                        onClick={() => onDelete(task.id)}
                                                    >
                                                        <Trash2 className="mr-2 w-3 h-3" />
                                                        Delete
                                                    </Button>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>

                                {task.description && !isExpanded && (
                                    <p className="text-xs text-muted-foreground line-clamp-1 break-words">
                                        {task.description}
                                    </p>
                                )}
                            </div>
                        </div>

                        {isExpanded && (
                            <div className="w-full pl-8 mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                                <textarea
                                    ref={(ref) => {
                                        if (ref) {
                                            ref.style.height = "auto";
                                            ref.style.height = `${ref.scrollHeight}px`;
                                        }
                                    }}
                                    className="w-full text-sm text-foreground bg-transparent border-none focus:ring-0 focus:outline-none resize-none p-0 leading-relaxed overflow-hidden placeholder:text-muted-foreground"
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                        e.target.style.height = "auto";
                                        e.target.style.height = `${e.target.scrollHeight}px`;
                                    }}
                                    placeholder="Add details..."
                                    rows={1}
                                />
                                {description !== (task.description ?? "") && (
                                    <div className="flex justify-end mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                                        <Button
                                            size="sm"
                                            onClick={() => {
                                                onEdit({ ...task, description: description.trim() })
                                                setIsExpanded(false)
                                            }}
                                            className="h-7 px-3 text-xs bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg flex items-center gap-1.5 transition-all active:scale-95 shadow-lg shadow-primary/20"
                                        >
                                            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                                            Save Changes
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </Item>
    )
}
