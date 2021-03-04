import React from "react";
import styles from "./ListItem.module.scss";
import { withStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const GreenCheckbox = withStyles({
    root: {
        color: "white",
        "&$checked": {
            color: "green",
            textDecorationStyle: "line-through",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const ListItem = ({ id, checked, content, handleChecked }) => {
    return (
        <div className={styles.wrapper}>
            <FormControlLabel
                control={
                    <GreenCheckbox
                        checked={checked}
                        onChange={(e) => handleChecked(id)}
                        name="checkedG"
                    />
                }
                label={content}
            />
            <br />
        </div>
    );
};

export default ListItem;
