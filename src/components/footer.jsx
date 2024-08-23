import React from "react";
import TasksFilter from "./tasksFilter";

function Footer() {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <ul className="filters">
                <TasksFilter />
            </ul>
            <button className="clear-completed">Clear Completed</button>
        </footer>
    );
}

export default Footer;