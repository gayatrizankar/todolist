import React, { useState } from 'react';

const Todolist = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const AddTodo = () => {
    if (!title || !desc) {
      alert("Both title and description are required!");
      return;
    }

    const newTodo = { title, desc };
    onAddTodo(newTodo);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="flex bg-blue-600 flex-col">
      <div className="flex items-center justify-center bg-blue-600 p-5">
        <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">My Todolist</h1>
      </div>
      <div className="w-full flex flex-col items-center gap-4 p-5 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto bg-blue-600">
        <div className="w-full">
          <input
            className="p-3 w-full h-12 bg-white border-2 border-black rounded focus:outline-none text-base sm:text-lg lg:text-xl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div className="w-full">
          <input
            className="p-3 w-full h-12 bg-white border-2 border-black rounded focus:outline-none text-base sm:text-lg lg:text-xl"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Enter description"
          />
        </div>
        <button
          className="p-3 w-full sm:w-32 lg:w-40 bg-blue-900 text-white font-bold rounded text-base sm:text-lg lg:text-xl"
          onClick={AddTodo}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Todolist;
