import React, { useState } from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [editableTask, setEditableTask] = useState({title: '', description: '', completed: false});

    
    return (
        <TodoContext.Provider value={{ tasks, setTasks, editableTask, setEditableTask }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;