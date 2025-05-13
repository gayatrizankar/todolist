import React from 'react';

const Todo = ({ todos, onDeleteTodo }) => {
  return (
    <div className='flex justify-center bg-blue-600 p-[20px] h-screen'>
      <div className='flex flex-col gap-[20px]'>
        {todos.length === 0 ? (
          <div className='font-bold'>NO TODOS YETT !!!!!</div>
        ) : (
          todos.map((todo, index) => (
            <div
              key={index}
              className='h-[120px] w-[350px] bg-white rounded-xl border-2 border-black p-2 flex flex-col items-center justify-between'
            >
              <p className='font-bold text-2xl text-black'>{todo.title}</p>
              <p className='text-xl text-black'>{todo.desc}</p>
              <button
                className='h-[50px] w-[300px] rounded-xl bg-red-500 border-2 border-black'
                onClick={() => onDeleteTodo(index)} 
              >
                DELETE
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
