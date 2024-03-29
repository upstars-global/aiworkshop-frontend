import React, {useState} from 'react';
import { useGetTasksQuery } from '../api/todoApi';
import ToDoItem from './ToDoItem';
import ToDoAddForm from "./ToDoAddForm";

function ToDoList() {
    const [isAddFormVisible, setIsAddFormVisible] = useState(false);
    const { data: tasks, error, isLoading, refetch } = useGetTasksQuery();

    const handleAddClick = () => {
        setIsAddFormVisible(true);
    }

    const handleRefetch = () => {
        refetch();
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.toString()}</div>;

    return (
        <div className="container">
            <div className="m-5">
                <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                    <h1>Список задач</h1>
                    <button className="btn btn-primary" onClick={handleAddClick}>Добавить</button>
                </div>
                {isAddFormVisible && (
                    <div>
                         <ToDoAddForm onClose={() => setIsAddFormVisible(false)} handleRefetch={handleRefetch} />
                    </div>
                )}
                <div>
                    {tasks.map(task => (
                        <ToDoItem key={task.id} task={task} handleRefetch={handleRefetch} />
                    ))}
                </div>
                {tasks.length === 0 && <div>Список задач пуст</div>}
            </div>
        </div>
    );
}

export default ToDoList;
