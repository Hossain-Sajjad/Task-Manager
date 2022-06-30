import React from 'react';

const CompletedTask = ({ task }) => {
    console.log(task)
    return (
        <li><strike>{task.completedTask}</strike></li>
    );
};

export default CompletedTask;