import { Board } from "@/components/Board";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full bg-background overflow-hidden">
      <Header />
      <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
        <Board />
      </main>
    </div>
  );
}