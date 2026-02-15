import { TaskState, Action } from "./types"

export const initialState: TaskState = {
  tasks: [],
  loading: false,
}

export function taskReducer(state: TaskState, action: Action): TaskState {
  switch (action.type) {
    case "LOAD_START":
      return { ...state, loading: true }

    case "LOAD_SUCCESS":
      return {
        tasks: action.payload,
        loading: false,
      }

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      }

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }

    default:
      return state
  }
}
