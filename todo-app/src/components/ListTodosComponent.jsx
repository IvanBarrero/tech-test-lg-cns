import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoContext from '../context/TodoContext';

const ListTodosComponent = () => {
    const allFilterValue = 'all';
    const completedFilterValue = 'completed';
    const pendingFilterValue = 'pending';

    const {tasks} = useContext(TodoContext);

    const tasks1 = [
        {title: 'Task 1', description: 'Task 1 description', completed: false},
        {title: 'Task 2', description: 'Task 2 description', completed: false},
        {title: 'Task 3', description: 'Task 3 description', completed: false},
        {title: 'Task 4', description: 'Task 4 description', completed: true},
        {title: 'Task 5', description: 'Task 5 description', completed: true},
        {title: 'Task 6', description: 'Task 6 description', completed: true},
    ]

    const navigate = useNavigate();
    const [filter, setFilter] = useState(allFilterValue);

    function addTask() {
        navigate('/add-task')
    }

    /**
     * Function to filter tasks to be displayed
     * @param {object} task
     * @returns true for all tasks if All filter is selected, true for all completed tasks
     * if Completed filter is selected, true for all pendig tasks in any other case.
     */
    function filterTask(task) {
        if (filter === allFilterValue) {
            return true;
        }
        else if (filter == completedFilterValue) {
            return task.completed;
        }
        else {
            return !task.completed;
        }
    }

    return (
        <div>
            <h2>List of Todos</h2>
            <button onClick={addTask}>Add Task</button>
            <div>
                <label htmlFor='filter'>Select a filter:</label>
                <select id='filter' name='filter'
                        value={filter}
                        onChange={e => setFilter(e.target.value)}>
                    <option value={allFilterValue} defaultValue={allFilterValue}>All</option>
                    <option value={completedFilterValue}>Completed</option>
                    <option value={pendingFilterValue}>Pending</option>
                </select>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.filter(task => filterTask(task))
                                .map((task, index) =>
                                    <tr key={index}>
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                        <td><input type="checkbox" checked={task.completed} disabled/></td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListTodosComponent;