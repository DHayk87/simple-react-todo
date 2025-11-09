<<<<<<< HEAD
# React To-Do App

This is a simple To-Do application built with React and Vite. It allows users to add, edit, mark as complete, and delete tasks.

## Core Concepts: State Management with `useState`

This application demonstrates fundamental React concepts, particularly state management using the `useState` hook. All of the application's state is managed within the main `App.jsx` component.

### State Variables

There are three key pieces of state that control the application's behavior:

1.  **`text`**: Manages the value of the input field for new tasks.

    ```javascript
    const [text, setText] = useState("");
    ```

    *   `text` stores the current string typed by the user.
    *   `setText` is the function used to update this string, typically called in an `onChange` handler.

2.  **`toDoTask`**: An array that holds all the to-do items.

    ```javascript
    const [toDoTask, setToDoTask] = useState([]);
    ```

    *   `toDoTask` is initialized as an empty array.
    *   When a new task is created, `setToDoTask` is called to add a new task object to the array. Each object has properties like `id`, `task` text, `completed` status, and `edit` status.
    *   Functions like `deleteTaskHandler` and `markTaskHandler` also use `setToDoTask` to update the array by filtering or mapping over the previous state.

3.  **`isTextTrue`**: A simple state for input validation.

    ```javascript
    const [isTextTrue, setIsTextTrue] = useState(null);
    ```

    *   This state is used to track whether the input field is empty when the user tries to add a task.
    *   If the input is empty, `isTextTrue` is set to `false`, which triggers a CSS class to show a visual error.

### How to Run

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run dev`

This simple usage of `useState` is a powerful pattern for managing the state of small to medium-sized React applications.
=======
# simple-react-todo
>>>>>>> f2408effe5249d61ec2f963039ad6f5b85511b6e
