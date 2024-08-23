import React from "react";
import Task from "./task";

function TaskList( { todos } ) {

    const elements = todos.map((item) => {
        return (
            <li>
                <Task { ...item }/>
            </li>
        );
    })

    return (
        <>
            { elements }
        </>
    );
}

export default TaskList;