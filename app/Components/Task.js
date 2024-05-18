'use client'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteTask, editTask } from '@/slices/taskSlice';

const Task = ({ task }) => {
  // const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    // dispatch(editTask({ id: task.id, title, description }));
    setIsEditing(false);
  };

  return (
    <div className="p-4 border-b border-gray-200">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-1 rounded w-full mb-2"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-1 rounded w-full mb-2"
          ></textarea>
          <button onClick={handleEdit} className="bg-blue-500 text-white p-2 rounded">
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className="text-xl">{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => setIsEditing(true)} className="text-blue-500 mr-2">Edit</button>
          {/* <button onClick={() => dispatch(deleteTask(task.id))} className="text-red-500">Delete</button> */}
        </>
      )}
    </div>
  );
};

export default Task;
