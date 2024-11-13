import React from 'react';

const TaskItem = ({ task, deleteTask, toggleCompletion }) => {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <span onClick={() => toggleCompletion(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
