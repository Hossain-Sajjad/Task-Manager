import React, { useState } from 'react';
import { HiPlus } from "react-icons/hi";

const AddTask = () => {
    const [flag, setFlag] = useState(false);
    const [flag2, setFlag2] = useState(true);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const task = event.target.value;
            if (task === '') {
                console.log("Enter a valid input")
            }
            else {
                const data = { task }
                fetch("https://infinite-beyond-42274.herokuapp.com/task", {
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
                console.log(data)
                setFlag(false);
                setFlag2(true);
            }
        }
    }
    const handleInputField = (event) => {
        event.preventDefault();
        setFlag(true);
        setFlag2(false);
    }
    return (
        <div>
            {
                flag && <div className='mb-8 w-96'>
                    <h3 className='text-primary text-xl font-semibold'>Add A New Task</h3>
                    <input onKeyDown={handleKeyDown} type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
            }
            {
                flag2 && <button onClick={handleInputField} class="btn gap-2">
                    Add a task
                    <HiPlus></HiPlus>
                </button>
            }
        </div>
    );
};

export default AddTask;