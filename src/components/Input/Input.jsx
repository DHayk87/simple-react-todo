function Input({ changeTextHandler, createTaskHandler, text, isTextTrue }) {
    return (
        <div className="add-task">
            <input
                type="text"
                onChange={changeTextHandler}
                value={text}
                placeholder="Add Some Task"
                className={isTextTrue === false ? "error" : ""}
            />
            <button onClick={createTaskHandler}>Add Task</button>
        </div>
    );
}

export default Input;
