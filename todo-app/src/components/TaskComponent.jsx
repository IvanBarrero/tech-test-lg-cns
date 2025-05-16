import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

const TaskComponent = ({ editable = false, task = null }) => {
    const { editableTask, setEditableTask } = useContext(TodoContext);

    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [completed, setCompleted] = useState(task ? task.completed : false);

    function handleTitleOnChange(value) {
        setTitle(value);
        if (!isInputEmpty(value)) {
            let editedTask = { ...editableTask, title: value.trim() };
            if (task) {
                editedTask.id = task.id;
            }

            setEditableTask(editedTask);
        }
    }

    function handleDescriptionOnChange(value) {
        setDescription(value);
        if (!isInputEmpty(value)) {
            let editedTask = { ...editableTask, description: value.trim() };
            if (task) {
                editedTask.id = task.id;
            }

            setEditableTask(editedTask);
        }
    }

    function handleCompletedOnChange(value) {
        setCompleted(value);
        let editedTask = { ...editableTask, completed: value };
        editedTask.completed = value;
        if (task) {
            editedTask.id = task.id;
        }

        setEditableTask(editedTask);
    }

    function isInputEmpty(value) {
        return value.trim() === "";
    }

    return (
        <div>
            <div>
                <label>Title: </label>
                <input
                    type='text'
                    placeholder='Enter the title of the task'
                    id='title'
                    name='title'
                    value={title}
                    onChange={(e) => handleTitleOnChange(e.target.value)}
                    disabled={!editable}
                />
            </div>
            <div>
                <label>Description: </label>
                <textarea
                    type='text'
                    placeholder='Enter the description of the task'
                    id='description'
                    name='description'
                    value={description}
                    onChange={(e) => handleDescriptionOnChange(e.target.value)}
                    disabled={!editable}
                />
            </div>
            <div>
                <label htmlFor='completed'>Completed: </label>
                <input
                    type='checkbox'
                    id='completed'
                    name='completed'
                    value={completed}
                    onChange={(e) => handleCompletedOnChange(e.target.checked)}
                    disabled={!editable}
                    defaultChecked={completed}
                />
            </div>
        </div>
    );
}

export default TaskComponent;