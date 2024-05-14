import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions';

interface EditTodoProps {
  index: number;
  text: string;
  onClose: () => void;
}

const EditTodo: React.FC<EditTodoProps> = ({ index, text, onClose }) => {
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    dispatch(editTodo(index, editedText));
    onClose(); // Close the edit popup after saving
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            className="text-sm text-gray-600 hover:text-gray-800 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-sm w-500 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 ml-4 rounded"
            onClick={handleSave}  style={{ width: '100px' }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
