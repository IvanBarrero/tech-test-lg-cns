import React, { useContext, useState } from 'react'
import TaskComponent from './TaskComponent';
import TodoContext from '../context/TodoContext';

const EditableTaskComponent = (props) => {
   const { tasks, setTasks, editableTask } = useContext(TodoContext);

    const [editable, setEditable] = useState(false);

 
    function saveTodo() {
        const task = {...editableTask};

        setTasks([...tasks.filter(currTask => currTask.id !== task.id), task]);
   }



    function handleEditOnChange(value) {
        setEditable(value);
        if(!value) { // if edit is not selected
            saveTodo();
        }
    }

    function deleteTask() {
        const newTasks = tasks.filter(currTask => currTask.id !== props.task.id);
        setTasks(newTasks);
    }

    return (
        <div>
            <TaskComponent editable={editable} task={props.task} />
            <div>
                <label htmlFor='editCheck'>Edit: </label>
                <input
                    type='checkbox'
                    id='editCheck'
                    name='editCheck'
                    value={editable}
                    onChange={(e) => handleEditOnChange(e.target.checked)}
                    defaultChecked={editable}
                />
                <button onClick={() => deleteTask()}>Delete</button>
            </div>
        </div>
    );
}

export default EditableTaskComponent;