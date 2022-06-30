import React, { useEffect, useState } from 'react';
import Task from './Task';

const ToDoTask = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("https://infinite-beyond-42274.herokuapp.com/task")
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div className='mt-12 mt-24 flex items-center flex-col'>
            <h1 className='text-primary text-2xl font-bold'>Task to do</h1>
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