import React from 'react';

const Task = ({ task }) => {
    const id = task._id;
    const handleCkbox = () => {

        const completedTask = task.task;
        const data = { completedTask }
        fetch("http://localhost:5000/completedtask", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(d => {
                console.log(d)
            })


        fetch(`http://localhost:5000/task/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log("Product deleted successfully."))
    }

    return (
        <li>{task.task} <input onChange={handleCkbox} type="checkbox" class="checkbox checkbox-xs" /></li>
    );
};

export default Task;