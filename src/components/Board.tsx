import { Column } from "./Column";
import { ColumnType } from "@/types/task";
export function Board() {

       const Columns : ColumnType[] = [
        {
            id: "todo",
            title: "To Do",
        },
        {
            id: "in-progress",
            title: "In Progress",
        },
        {
            id: "done",
            title: "Done",
        },
    ];
    return (
        <div className="flex gap-4 w-full">
            {Columns.map((column) => (
                <div key={column.id} className="flex flex-1 flex-col p-2 border border-gray-200 rounded-md">
                    <Column column={column} />

                </div>
            ))}
        </div>
    );
}