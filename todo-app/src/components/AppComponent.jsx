import React, { useContext } from 'react'
import TaskComponent from './AddTaskComponent'
import ListTodosComponent from './ListTodosComponent'
import TodoContext from '../context/TodoContext';

const AppComponent = () => {
    const { tasks, setTasks } = useContext(TodoContext);

    function saveTask(task) {
        setTasks([...tasks, task]);
    }

    return (
        <div>
            <TaskComponent editable={true} onSave={saveTask} />
            <ListTodosComponent />
        </div>
    )
}

export default AppComponent