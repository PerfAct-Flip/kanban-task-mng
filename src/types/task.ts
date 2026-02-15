export type Priority = 'low' | 'medium' | 'high';

export interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    status: string;
    priority: Priority;
    createdAt: Date;
}

export interface ColumnType {
    id: string;
    title: string;
}
