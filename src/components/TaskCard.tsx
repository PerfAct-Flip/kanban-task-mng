import { Task } from '@/types/task';




export function TaskCard({task} : {task: Task}) {
    
    return (
        <div id={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>{task.priority}</p>
        </div>
    );
}
