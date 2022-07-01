import React from 'react';
import { FiEdit } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Task = ({ task, tasks, setTasks }) => {
    const navigate = useNavigate()
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
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = tasks.filter(task => task._id !== id);
                    setTasks(remaining);
                }
            })
    }

    const handleEdit = () => {
        navigate(`/home/${id}`);
    }

    return (
        <li>{task.task}<button onClick={handleEdit} className='ml-4'><FiEdit></FiEdit></button> <input onChange={handleCkbox} type="checkbox" checked='checked' className="checkbox checkbox-xs ml-4" />
        </li>
    );
};

export default Task;