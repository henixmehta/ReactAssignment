import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: 1, name: "Sample Task 1", completed: false },
                { id: 2, name: "Sample Task 2", completed: true },
            ]
        };
    }

    addTask = (taskName) => {
        const newTask = {
            id: Date.now(),
            name: taskName,
            completed: false,
        };
        this.setState({ tasks: [...this.state.tasks, newTask] });
    }

    deleteTask = (taskId) => {
        const filteredTasks = this.state.tasks.filter(task => task.id !== taskId);
        this.setState({ tasks: filteredTasks });
    }

    toggleCompletion = (taskId) => {
        const updatedTasks = this.state.tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        this.setState({ tasks: updatedTasks });
    }

    render() {
        return (
            <div className="task-manager">
                <h1>Task Manager</h1>
                <TaskForm addTask={this.addTask} />
                <TaskList 
                    tasks={this.state.tasks} 
                    deleteTask={this.deleteTask} 
                    toggleCompletion={this.toggleCompletion} 
                />
            </div>
        );
    }
}

export default TaskManager;
