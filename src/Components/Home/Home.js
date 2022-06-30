import React from 'react';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import ToDoTask from '../ToDoTask/ToDoTask';
import AddTask from './AddTask';

const Home = () => {
    return (
        <div className='mt-24 flex items-center flex-col'>
            <AddTask></AddTask>
            <ToDoTask></ToDoTask>
            <CompletedTasks></CompletedTasks>
        </div>
    );
};

export default Home;