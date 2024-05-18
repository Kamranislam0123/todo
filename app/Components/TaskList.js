// components/TaskList.js
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.tasks);
const tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3' },
  ];
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
