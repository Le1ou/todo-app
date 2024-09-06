import React from "react";
import PropTypes from "prop-types";

function NewTaskForm( { onLabelChange, label } ) {
    return (
        <input className="new-todo"
               onChange={onLabelChange}
               value={label}
               placeholder="What needs to be down?"/>
    );
}

NewTaskForm.defaultProps = {
    onLabelChange: () => {}
}

NewTaskForm.PropTypes = {
    label: PropTypes.string.isRequired,
    onLabelChange: PropTypes.func
}

export default NewTaskForm;