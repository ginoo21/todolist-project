import React from 'react';
import { Card } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'Done':
                return <div className="status-circle done"></div>;
            case 'In Progress':
                return <div className="status-circle in-progress"></div>;
            default:
                return <div className="status-circle"></div>;
        }
    };

    const getPriorityClass = (priority) => {
        switch (priority) {
            case 'High':
                return 'text-danger';
            case 'Medium':
                return 'text-warning';
            case 'Low':
                return 'text-success';
            default:
                return '';
        }
    };

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <Card key={task.id} className="task-card mb-3">
                    <Card.Body className="d-flex justify-content-between align-items-center py-3 px-4">
                        <div className="d-flex align-items-center gap-3">
                            <div>
                                <div className="task-label mb-1">Task</div>
                                <div className="task-name">{task.name}</div>
                            </div>
                            <div>
                                <div className="priority-label mb-1">Priority</div>
                                <div className={`priority-value ${getPriorityClass(task.priority)}`}>
                                    {task.priority}
                                </div>
                            </div>
                            <div className={`status-badge ${task.status.toLowerCase().replace(' ', '-')}`}>
                                {task.status}
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-3"> {/* Increased gap */}
                            <div className="me-2">{getStatusIcon(task.status)}</div> {/* Added margin */}
                            <button 
                                className="btn btn-icon" 
                                onClick={() => showEditForm(task)}
                            >
                                <Pencil size={18} />
                            </button>
                            <button 
                                className="btn btn-icon" 
                                onClick={() => deleteTask(task.id)}
                            >
                                <Trash size={18} />
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default TaskList;