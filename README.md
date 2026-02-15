Kanban Task Board (IndexedDB + Native Drag & Drop)

A lightweight **Kanban-style task management board** built with **Next.js, TypeScript, and IndexedDB (Dexie)** featuring persistent storage and smooth native drag-and-drop interactions.

---
## 🏗 Tech Stack Explanation

This project uses **Next.js with TypeScript** to ensure scalable structure, type safety, and modern React architecture through the App Router.
**IndexedDB via Dexie** was chosen for reliable client-side persistence without requiring a backend, enabling offline capability.
**Native HTML5 drag-and-drop** was used instead of external libraries to keep the implementation lightweight, dependency-free, and stable for the assignment scope.

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
│   └── globals.css     # Theme and global styles
│
├── types/
│   └── task.ts         # TypeScript definitions
│
└── utils/
    └── constants.ts    # Board configuration
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/PerfAct-Flip/kanban-task-mng.git
cd kanban-board
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

Navigate to:

```
http://localhost:3000
```

The Kanban board will load with **persistent local storage enabled**.

---

## 🤖 AI Tool Usage

AI tools were used selectively to support early-stage development and learning:

* Assisted in **initial architecture planning**, including reducer structure and overall drag-and-drop flow
* Helped with **debugging and refactoring** to improve code clarity, separation of concerns, and maintainable structure
* Provided guidance while learning **React useReducer**, which was unfamiliar at the start of the project
* Supported troubleshooting when attempting **dnd-kit–based drag-and-drop**; after encountering stability issues, the final implementation was rebuilt using **native HTML5 drag-and-drop**
* Primarily used for an **initial productivity boost** after creating the base layout and core project setup independently

All final implementation decisions, code structure, and testing were completed manually.

---

## ⚠️ Known Issues / Limitations

* Tasks **cannot yet be reordered within the same column** (only moved across columns)
* Drag-and-drop currently supports **mouse interaction only** (no keyboard accessibility)
* Data is stored **locally in the browser**, so it does not sync across devices

These are identified as **future improvement areas**.

---

## 🚀 Possible Future Improvements

* Reordering tasks **within the same column**
* Search/filter tasks by title
* Backend sync


---

## 📸 Demo

https://www.loom.com/share/bb8c6da9cba84c58a73cb5a0e734506b
---

## 👤 Author

**Soham Sinha**
Frontend / Full-Stack Developer
Focused on **React, Next.js, and product-driven UI engineering**.

---

## 📄 License

This project is created for **educational and evaluation purposes**.
