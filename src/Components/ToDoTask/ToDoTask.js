import React, { useEffect, useState } from 'react';
import Task from './Task';

const ToDoTask = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/task")
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <h1>Task to do</h1>
            <ol>
                {
                    tasks && tasks?.map(task =>
                        <Task
                            key={task._id}
                            task={task}
                        ></Task>
                    )
                }
            </ol>
        </div>
    );
};

export default ToDoTask;