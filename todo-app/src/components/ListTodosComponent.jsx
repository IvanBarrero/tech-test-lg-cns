import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';
import TaskComponent from './TaskComponent';

const ListTodosComponent = () => {
    const allFilterValue = 'all';
    const completedFilterValue = 'completed';
    const pendingFilterValue = 'pending';

    const { tasks } = useContext(TodoContext);

    const [filter, setFilter] = useState(allFilterValue);

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
        else if (filter === completedFilterValue) {
            return task.completed;
        }
        else { // Pending tasks only
            return !task.completed;
        }
    }

    return (
        <div>
            <h2>List of Todos</h2>
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
                <ul>
                    {
                        tasks.filter(task => filterTask(task))
                            .map((task) => {
                                return <li key={task.id}><TaskComponent editable={false} task={task} /></li>
                            }
                            )
                    }
                </ul>
            </div>
        </div>
    );
}

export default ListTodosComponent;