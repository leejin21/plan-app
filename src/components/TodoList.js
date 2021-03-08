import React, { useState, useRef } from "react";

import styles from "./TodoList.module.scss";
import ListItem from "./ListItem.js";

import { formatTime } from "../utils";
import useTimer from "../hooks/useTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const initTodo = [
    {
        id: 1,
        checked: true,
        content: "plan-app에서 todolist 컴포넌트 만들어주기",
    },
];

const element = <FontAwesomeIcon icon={faClock} />;

const TodoList = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState(initTodo);
    const {
        timer,
        isActive,
        isPaused,
        handleStart,
        handlePause,
        handleResume,
        handleReset,
    } = useTimer();

    const next_id = useRef(1);

    const onChange = (e) => {
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

    return (
        <div className={styles.wrapper}>
            <p>총 공부량: {element}</p>
            <p>{formatTime(timer)}</p>
            <div>
                {!isActive && !isPaused ? (
                    <button onClick={handleStart}>Start</button>
                ) : isPaused ? (
                    <button onClick={handlePause}>Pause</button>
                ) : (
                    <button onClick={handleResume}>Resume</button>
                )}
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
