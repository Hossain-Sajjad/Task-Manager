import React from 'react';

const CompletedTask = ({ task }) => {
    console.log(task)
    return (
        <p><strike>{task.completedTask}</strike></p>
    );
};

export default CompletedTask;