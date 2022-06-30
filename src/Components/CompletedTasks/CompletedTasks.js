import React, { useEffect, useState } from 'react';
import CompletedTask from './CompletedTask';


const CompletedTasks = () => {

    const [completedTasks, setCompletedTasks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/completedtask")
            .then(res => res.json())
            .then(data => setCompletedTasks(data))
    }, [])

    return (
        <div>
            <h1>this is completed task</h1>
            <ol>
                {
                    completedTasks && completedTasks?.map(completedTask =>
                        <CompletedTask
                            key={completedTask._id}
                            task={completedTask}
                        ></CompletedTask>
                    )
                }
            </ol>
        </div>
    );
};

export default CompletedTasks;