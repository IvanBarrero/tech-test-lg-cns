import React, { useState } from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    
    return (
        <TodoContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;