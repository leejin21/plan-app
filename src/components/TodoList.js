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
    const [timer, setTimer] = useState(0);
    // const [isActive, setIsActive] = useState(false);
    // const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null);

    const next_id = useRef(1);

    const onChange = (e) => {
        // console.log(e.target.value);
        setTask(e.target.value);
    };
    const onClick = () => {
        next_id.current++;
        setTodos([
            ...todos,
            { id: next_id.current, checked: false, content: task },
        ]);
        setTask("");
    };
    const handleChecked = (id) => {
        const new_todos = todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        );
        setTodos(new_todos);
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };
    // 스톱워치 관련 functions
    const handleStart = () => {
        // setIsActive(true);
        // setIsPaused(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };
    const handlePause = () => {
        clearInterval(countRef.current);
        // setIsPaused(false);
    };
    const handleResume = () => {
        // setIsPaused(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };
    const handleReset = () => {
        clearInterval(countRef.current);
        // setIsActive(false);
        // setIsPaused(false);
        setTimer(0);
    };
    return (
        <div className={styles.wrapper}>
            <p>총 공부량: {timer}</p>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleResume}>Resume</button>
                <button onClick={handleReset}>Reset</button>
            </div>
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
                        handleChecked={handleChecked}
                        id={id}
                    ></ListItem>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
