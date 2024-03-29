import React, {useState} from 'react';
import { useCheckTaskMutation, useUncheckTaskMutation, useDeleteTaskMutation } from '../api/todoApi';

function ToDoItem({ task, handleRefetch }) {
    const [completed, setCompleted] = useState(task.completed);

    const [checkTask] = useCheckTaskMutation();
    const [uncheckTask] = useUncheckTaskMutation();
    const [deleteTask] = useDeleteTaskMutation();

    const handleCheck = async (ev) => {
        setCompleted(ev.target.checked);
        if (ev.target.checked) {
            await checkTask(task.id);
        } else {
            await uncheckTask(task.id);
        }
        handleRefetch()
    };

    const handleDelete = async () => {
        await deleteTask(task.id);
        handleRefetch()
    };

    return (
        <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleCheck}
                    className="me-2"
                />
                <span className={task.completed ? 'text-decoration-line-through' : ''}>
                    <div className="fw-bold">{task.title}</div>
                    {task.description}
                </span>
            </div>
            <button className="btn btn-danger" onClick={handleDelete}>Удалить</button>
        </div>
    );
}

export default ToDoItem;
