import React, { useState } from 'react';
import { HiPlus } from "react-icons/hi";

const AddTask = () => {
    const [flag, setFlag] = useState(false);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const task = event.target.value;
            if (task === '') {
                console.log("Enter a valid input")
            }
            else {
                const data = { task }
                fetch("http://localhost:5000/task", {
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
            }
        }
    }
    const handleInputField = (event) => {
        event.preventDefault();
        setFlag(true);
    }
    return (
        <div>
            {
                flag && <div>
                    <input onKeyDown={handleKeyDown} type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
            }
            <button onClick={handleInputField} class="btn gap-2">
                Add a task
                <HiPlus></HiPlus>
            </button>
        </div>
    );
};

export default AddTask;