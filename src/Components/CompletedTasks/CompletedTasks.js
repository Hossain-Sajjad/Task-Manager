import React, { useEffect, useState } from 'react';
import CompletedTask from './CompletedTask';
import { AiOutlineCheck } from "react-icons/ai";


const CompletedTasks = () => {

    const [completedTasks, setCompletedTasks] = useState([]);
    useEffect(() => {
        fetch("https://infinite-beyond-42274.herokuapp.com/completedtask")
            .then(res => res.json())
            .then(data => setCompletedTasks(data))
    }, [])

    return (
        <div className='mt-12 flex items-center flex-col'>
            <div class="dropdown">
                <label tabindex="0" class="btn m-1">
                    Completed task
                    <p className='ml-4'><AiOutlineCheck></AiOutlineCheck></p>
                </label>
                <div tabindex="0" class="dropdown-content menu shadow bg-base-100 rounded-box">
                    {
                        completedTasks && completedTasks?.map(completedTask =>
                            <CompletedTask
                                key={completedTask._id}
                                task={completedTask}
                            ></CompletedTask>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CompletedTasks;