import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    loadTasks: (state) => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        state.tasks = JSON.parse(savedTasks);
      }
    },
  },
});

export const { addTask, deleteTask, editTask, loadTasks } = taskSlice.actions;
export default taskSlice.reducer;
