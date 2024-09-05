import React from "react";
import Task from "./task";

function TaskList( { todos, delTodo, onToogleCheck } ) {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item
        return (
                <Task
                key={id}
                { ...itemProps }
                delTodo={() => delTodo(id)}
                onToogleCheck={() => onToogleCheck(id)}/>
        );
    })

    return (
        <>
            {elements}
        </>
    );
}

export default TaskList;