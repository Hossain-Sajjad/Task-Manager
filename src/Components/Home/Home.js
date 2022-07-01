import React from 'react';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import Footer from '../Shared/Footer/Footer';
import ToDoTask from '../ToDoTask/ToDoTask';
import AddTask from './AddTask';

const Home = () => {
    return (
        <div>
            <div className='mt-24 flex items-center flex-col min-h-screen'>
                <AddTask></AddTask>
                <ToDoTask></ToDoTask>
                <CompletedTasks></CompletedTasks>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;