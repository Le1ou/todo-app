import React from "react";
import Task from "./task";

function TaskList( { todos, delTodo } ) {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item
        return (
                <Task
                key={id}
                { ...itemProps }
                delTodo={() => delTodo(id)}/>
        );
    })

    return (
        <>
            { elements }
        </>
    );
}

export default TaskList;