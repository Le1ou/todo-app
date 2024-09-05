import React from "react";

function TasksFilterr( { status, filterTodos } ) {
    return (
        <>
            <li>
                <button className={status==="all" ? "selected" : ""} onClick={() => filterTodos("all")}>All</button>
            </li>
            <li>
                <button className={status==="active" ? "selected" : ""} onClick={() => filterTodos("active")}>Active</button>
            </li>
            <li>
                <button className={status==="completed" ? "selected" : ""} onClick={() => filterTodos("completed")}>Completed</button>
            </li>
        </>
    );
}

export default TasksFilterr;