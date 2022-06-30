import React, { useEffect, useState } from 'react';
import CompletedTask from './CompletedTask';
import { AiOutlineCheck } from "react-icons/ai";


const CompletedTasks = () => {

    const [completedTasks, setCompletedTasks] = useState([]);
    useEffect(() => {
        fetch("https://infinite-beyond-42274.herokuapp.com//completedtask")
            .then(res => res.json())
            .then(data => setCompletedTasks(data))
    }, [])

    return (
        <div className='mt-12 mt-24 flex items-center flex-col'>
            <div class="dropdown">
                <label tabindex="0" class="btn m-1">
                    Completed task
                    <p className='ml-4'><AiOutlineCheck></AiOutlineCheck></p>
                </label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        completedTasks && completedTasks?.map(completedTask =>
                            <CompletedTask
                                key={completedTask._id}
                                task={completedTask}
                            ></CompletedTask>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default CompletedTasks;