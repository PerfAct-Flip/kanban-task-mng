# Kanban Task Board (IndexedDB + Native Drag & Drop)

A lightweight **Kanban-style task management board** built with **Next.js, TypeScript, and IndexedDB (Dexie)** featuring persistent storage and smooth native drag-and-drop interactions.

This project was developed as a **frontend/full-stack intern take-home assignment**, focusing on clean architecture, offline persistence, and intuitive UX.

---

## ✨ Features

### Core Functionality

* Create, edit, and delete tasks
* Three workflow stages:

  * **To Do**
  * **In Progress**
  * **Done**
* **Native HTML5 drag-and-drop** to move tasks between columns
* Drop into **empty columns supported**
* Instant UI updates using **useReducer state management**
* **Persistent storage with IndexedDB (Dexie)**
  → tasks remain after page refresh

### UX Enhancements

* **Glassmorphism**: Backdrop blur effects on header and column containers.
* **Responsive Layout**: Fluid columns that take the whole board with minimum width constraints.
* Drag feedback (opacity + scale) and column highlight on hover.
* Auto-expanding textareas for description editing.

---

## 🏗 Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **State Management:** React `useReducer`
* **Client Database:** IndexedDB via **Dexie.js**
* **Styling:** Tailwind CSS (Modern Oklch palette)
* **Icons:** Lucide-React
* **Drag & Drop:** Native HTML5 Drag API

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Board.tsx
│   ├── Column.tsx
│   ├── TaskCard.tsx
│   ├── AddTaskForm.tsx
│   └── Header.tsx
│
├── lib/
│   ├── storage.ts      # Dexie DB configuration
│   └── taskService.ts  # Database abstraction layer
│
├── store/
│   └── taskReducer.ts  # Global task state management
│
├── styles/
│   └── globals.css     # Premium dark theme tokens
│
├── types/
│   └── task.ts         # TypeScript definitions
│
└── utils/
    └── constants.ts    # Board configuration
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd kanban-board
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 💾 Data Persistence

Tasks are stored locally using **IndexedDB** via Dexie:

* Works **offline**
* No backend required
* Data survives refresh and browser restart
* Easily extendable to a real API later

---

## 🧠 Architecture Decisions

### Why useReducer instead of useState?

* Centralized state transitions
* Predictable updates
* Scales better for CRUD + drag interactions

### Why IndexedDB (Dexie)?

* Persistent client-side storage
* Asynchronous and large-data friendly
* Cleaner API compared to raw IndexedDB

### Why Native Drag & Drop?

* Zero external dependency
* High reliability for simple Kanban behavior
* Faster implementation for assignment scope

---

## 🚀 Possible Future Improvements

* Reordering tasks **within the same column**
* Keyboard accessibility for drag operations
* Drag preview overlay
* Backend sync (Node.js / Supabase / Firebase)
* User authentication
* Real-time collaboration

---

## 📸 Demo

*Add a deployed link or demo video here (Vercel / Loom).*

---

## 👤 Author

**Soham Sinha**
Frontend / Full-Stack Developer
Focused on **React, Next.js, and product-driven UI engineering**.

---

## 📄 License

This project is created for **educational and evaluation purposes**.
