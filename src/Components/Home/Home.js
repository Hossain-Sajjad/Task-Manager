import React, { useState } from 'react';
import { HiPlus } from "react-icons/hi";

const Home = () => {
    const [flag, setFlag] = useState(false);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const data = event.target.value;
            console.log(data)
            setFlag(false);
        }
    }
    const handleInputField = (event) => {
        event.preventDefault();
        setFlag(true);
    }

    return (
        <div>
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
        </div>
    );
};

export default Home;