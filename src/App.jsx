import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import ToDoS from "./components/ToDoS/ToDoS";
import MarkButton from "./components/MarkButton/MarkButton";

function App() {
    const [text, setText] = useState("");
    const [toDoTask, setToDoTask] = useState([]);
    const [isTextTrue, setIsTextTrue] = useState(null);

    function changeTextHandler(e) {
        setText(e.target.value);
        setIsTextTrue(true);
    }

    function createTaskHandler() {
        if (text.trim()) {
            setIsTextTrue(true);
            setToDoTask((prev) => {
                return [
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        task: text,
                        completed: false,
                        edit: false,
                    },
                ];
            });
            setText("");
        } else {
            setIsTextTrue(text.trim() !== "");
        }
    }

    function markTaskHandler(id) {
        setToDoTask((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }
    function deleteTaskHandler(id) {
        setToDoTask(toDoTask.filter((task) => task.id !== id));
    }

    function editTaskHandler(id) {
        setToDoTask((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, edit: !task.edit } : task
            )
        );
    }

    function saveEditHandler(id, value) {
        setToDoTask((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, task: value, edit: false } : task
            )
        );
    }
    function markAll() {
        setToDoTask(toDoTask.map((elm) => ({ ...elm, completed: true })));
    }

    return (
        <section>
            <div className="container todo-wrapper">
                <Input
                    changeTextHandler={changeTextHandler}
                    createTaskHandler={createTaskHandler}
                    text={text}
                    isTextTrue={isTextTrue}
                />
                <ul className="toDos">
                    {toDoTask.map((task) => (
                        <ToDoS
                            key={task.id}
                            task={task}
                            markTaskHandler={markTaskHandler}
                            editTaskHandler={editTaskHandler}
                            deleteTaskHandler={deleteTaskHandler}
                            changeTextHandler={changeTextHandler}
                            saveEditHandler={saveEditHandler}
                        />
                    ))}
                </ul>
                <div className="taskFooter">
                    <MarkButton markAll={markAll} />
                    <p>{toDoTask.length}</p>
                </div>
            </div>
        </section>
    );
}

export default App;
