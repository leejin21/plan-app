import React, { useState, useRef } from "react";

import styles from "./TodoList.module.scss";
import ListItem from "./ListItem.js";

const initTodo = [
    {
        id: 1,
        checked: true,
        content: "plan-app에서 todolist 컴포넌트 만들어주기",
    },
];

const TodoList = () => {
    const [task, setTask] = useState("안녕");
    const [todos, setTodos] = useState(initTodo);
    const next_id = useRef(1);

    const onChange = (e) => {
        // console.log(e.target.value);
        setTask(e.target.value);
    };
    const onClick = () => {
        next_id.current++;
        console.log(next_id);
        setTodos([
            ...todos,
            { id: next_id.current, checked: false, content: task },
        ]);
        setTask("");
        console.log(todos);
    };
    const handleKeyPress = (e) => {
        // console.log(e.key);
        if (e.key === "Enter") {
            // console.log(e.key);
            onClick();
        }
    };
    return (
        <div className={styles.wrapper}>
            <input
                value={task}
                name="task"
                onChange={onChange}
                autoFocus
                onKeyPress={handleKeyPress}
            ></input>
            <button onClick={onClick}>제출</button>
            <ul>
                {todos.map(({ id, checked, content }) => (
                    <ListItem
                        checked={checked}
                        content={content}
                        key={id}
                    ></ListItem>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
