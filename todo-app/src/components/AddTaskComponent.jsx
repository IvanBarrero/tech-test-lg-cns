import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';
import TaskComponent from './TaskComponent';

const AddTaskComponent = () => {
    const {tasks, setTasks} = useContext(TodoContext);
    const {editableTask} = useContext(TodoContext);
 
    // Temporary task id , should be provided by the REST API.
    const [counter, setCounter] = useState(0);

    function saveTodo(e) {
        e.preventDefault();
        const task = {...editableTask, id: counter};
        setTasks([...tasks, task]);
        console.log(task);
        console.log(tasks);
        setCounter(counter+1);
   }

    return (
        <div>
            <h2>Add new task</h2>
            <form>
                <TaskComponent editable={true} />
                <button onClick={ (e) => saveTodo(e)}>Save</button>
            </form>
        </div>
    );
}

export default AddTaskComponent;