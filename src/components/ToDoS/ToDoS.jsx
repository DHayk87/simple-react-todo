function ToDoS({
    task,
    markTaskHandler,
    editTaskHandler,
    deleteTaskHandler,
    saveEditHandler,
}) {
    return (
        <>
            <li className="toDoItem">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => {
                        markTaskHandler(task.id);
                    }}
                />
                {task.edit ? (
                    // <input type="text" value={task.task} onFocus={(e) => saveEditHandler(task.id , e.target.value)} />
                    <input
                        type="text"
                        value={task.task}
                        onChange={(e) => saveEditHandler(task.id, e.target.value)}
                    />
                ) : (
                    <p className={`currentTaskData ${task.completed ? "finished" : ""}`}>
                        {task.task}
                    </p>
                )}
                <button onClick={() => editTaskHandler(task.id)}>
                    {task.edit ? "save" : "edit"}
                </button>
                <button onClick={() => deleteTaskHandler(task.id)}>X</button>
            </li>
        </>
    );
}

export default ToDoS;
