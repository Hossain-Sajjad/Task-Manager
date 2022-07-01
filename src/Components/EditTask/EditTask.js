import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTask = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            const task = event.target.value;
            console.log(task)
            if (task === '') {
                console.log("Enter a valid input")
            }
            else {
                const data = { task }
                fetch(`https://infinite-beyond-42274.herokuapp.com/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                toast("Task Updated Successfully!")
                navigate('/');
            }
        }
    }

    return (
        <div className='mt-12 mt-24 flex items-center flex-col'>
            <div className='mb-8 w-96'>
                <h3 className='text-primary text-xl font-semibold'>Edit Your Task</h3>
                <input onKeyDown={handleSubmit} type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <ToastContainer />
        </div>
    );
};

export default EditTask;