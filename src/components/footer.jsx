import React from "react";
import TasksFilter from "./tasksFilter";

function Footer( { todoCount, status, filterTodos, clearData } ) {
    return (
        <footer className="footer">
            <span className="todo-count">{todoCount} items left</span>
            <ul className="filters">
                <TasksFilter status={status}
                             filterTodos={filterTodos}
                />
            </ul>
            <button className="clear-completed" onClick={clearData}>Clear Completed</button>
        </footer>
    );
}

export default Footer;