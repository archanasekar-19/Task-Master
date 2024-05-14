import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo,markCompleted, markIncomplete } from '../redux/actions';
import { FaTrash, FaCheck, FaTimes, FaEdit } from 'react-icons/fa';
import EditTodo from './EditTodo';

interface TodoItemProps {
  todo: {
    text: string;
    completed: boolean;
  };
  index: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
  const dispatch = useDispatch();


  const [editing, setEditing] = useState(false); // State for tracking edit mode

  const handleEditClick = () => {
    setEditing(true); // Open the edit popup when clicking edit button
  };

  const handleCloseEdit = () => {
    setEditing(false); // Close the edit popup
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}.
        </span>
        <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className='space-x-3 ml-8'>
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))} style={{width:"30px",height:"30px"}}
        >
          <FaTrash />
        </button>

        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={handleEditClick} style={{width:"30px",height:"30px"}}
        >
          <FaEdit />
        </button>


        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))} style={{width:"30px",height:"30px"}}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))} style={{width:"30px",height:"30px"}}
          >
            <FaTimes />
          </button>
        )}
      </div>

      {editing && ( 
        <EditTodo
          index={index}
          text={todo.text}
          onClose={handleCloseEdit} 
        />
      )}
    </li>
  );
};

export default TodoItem;
