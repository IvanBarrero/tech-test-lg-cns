import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';
import { useNavigate } from 'react-router-dom';

const AddTaskComponent = () => {
    const {tasks, setTasks} = useContext(TodoContext);

    const navigate = useNavigate();
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);


    function saveTodo(e) {
        e.preventDefault();

        const task = {title, description, completed};

        setTasks([...tasks, task]);

        navigate('/tasks');
    }

    return (
        <div>
            <h2>Add new task</h2>
            <form>
                <div>
                    <label>Title</label>
                    <input
                        type='text'
                        placeholder='Enter the title of the task'
                        id='title'
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        type='text'
                        placeholder='Enter the description of the task'
                        id='description'
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='completed'>Completed?</label>
                    <input
                        type='checkbox'
                        id='completed'
                        name='completed'
                        value={completed}
                        onChange={(e) => setCompleted(e.target.checked)}>
                    </input>
                </div>
                <button onClick={ (e) => saveTodo(e)}>Submit</button>
            </form>
        </div>
    );
}

export default AddTaskComponent;