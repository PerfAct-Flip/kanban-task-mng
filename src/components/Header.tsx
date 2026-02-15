import { Layout } from "lucide-react"

export function Header() {
    return (
        <header className="flex w-full items-center justify-between px-4 md:px-6 py-4 border-b border-border bg-card/60 backdrop-blur-xl sticky top-0 z-50 shrink-0">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-xl shadow-lg shadow-primary/20">
                    <Layout className="w-5 h-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold text-foreground tracking-tight">
                    KanbanTask
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-medium text-muted-foreground">
                    KT
                </div>
            </div>
        </header>
    )
}
