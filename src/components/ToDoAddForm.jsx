import React, { useState } from 'react';
import { useAddTaskMutation } from '../api/todoApi';

function ToDoAddForm({ onClose, handleRefetch }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [addTask] = useAddTaskMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTask({ title, description });
        setTitle('');
        setDescription('');
        onClose();
        handleRefetch();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-light p-4 mb-3">
            <div className="mb-3">
                <label className="form-label">Название</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Описание</label>
                <textarea
                    className="form-control"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary me-2">Добавить</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Отмена</button>
        </form>
    );
}

export default ToDoAddForm;
