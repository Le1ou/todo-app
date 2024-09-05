import React from "react";

function NewTaskForm( { onLabelChange, label } ) {
    return (
        <input className="new-todo"
               onChange={onLabelChange}
               value={label}
               placeholder="What needs to be down?"/>
    );
}

export default NewTaskForm;