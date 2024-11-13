import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleCompletion }) => {
    return (
        <div className="task-list">
            {tasks.length === 0 ? (
                <p>No tasks to display.</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem 
                        key={task.id} 
                        task={task} 
                        deleteTask={deleteTask} 
                        toggleCompletion={toggleCompletion} 
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;
