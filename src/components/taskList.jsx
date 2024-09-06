import React from "react";
import Task from "./task";

function TaskList( { todos, delTodo, onToogleCheck, handleEditChange, onSwitchEditing, saveEditText } ) {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item
        return (
                <Task
                key={id}
                { ...itemProps }
                delTodo={() => delTodo(id)}
                onToogleCheck={() => onToogleCheck(id)}
                saveEditText={() => saveEditText(id)}
                handleEditChange={(evt) => handleEditChange(id, evt.target.value)}
                onSwitchEditing={() => onSwitchEditing(id)}/>
        );
    })

    return (
        <>
            {elements}
        </>
    );
}

TaskList.defaultProps = {
    todos: [],
    delTodo: () => {}, 
    onToogleCheck: () => {}, 
    handleEditChange: () => {}, 
    onSwitchEditing: () => {},
    saveEditText: () => {}
}

export default TaskList;