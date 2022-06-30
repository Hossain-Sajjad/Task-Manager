import React from 'react';

const Task = ({ task }) => {
    const id = task._id;
    const handleCkbox = () => {

        const completedTask = task.task;
        const data = { completedTask }
        fetch("https://infinite-beyond-42274.herokuapp.com/completedtask", {
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


        fetch(`https://infinite-beyond-42274.herokuapp.com/task/${id}`, {
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