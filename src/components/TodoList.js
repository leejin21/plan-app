import React, { useState } from "react";
import styles from "./TodoList.module.scss";
import ListItem from "./ListItem.js";

const initTodo = [
    { checked: true, content: "plan-app에서 todolist 컴포넌트 만들어주기" },
];

const TodoList = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState(initTodo);
    const onChange = (e) => {
        setTask(e.target.task);
    };
    return (
        <div className={styles.wrapper}>
            <input
                value={task}
                name="task"
                onChange={onChange}
                autoFocus
            ></input>
            <ul>
                {todos.map(({ checked, content }) => (
                    <ListItem checked={checked} content={content}></ListItem>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
