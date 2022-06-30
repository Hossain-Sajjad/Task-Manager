import React from 'react';
import { HiPlus } from "react-icons/hi";

const Home = () => {
    return (
        <div>
            <div>
                <div>
                    <form action="">
                        <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    </form>
                </div>
                <button class="btn gap-2">
                    Add a task
                    <HiPlus></HiPlus>
                </button>
            </div>
        </div>
    );
};

export default Home;