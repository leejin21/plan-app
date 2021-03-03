import React from "react";
import styles from "./ListItem.module.scss";

const ListItem = ({ checked, content }) => {
    return (
        <li className={styles.wrapper}>
            {checked ? "true" : "false"}, {content}
        </li>
    );
};

export default ListItem;
