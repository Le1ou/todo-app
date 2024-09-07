import React from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

export default class Task extends React.Component {
    static defaulProps = {
        done: false,
        check: false,
        edit: false,
        editText: '',
        onToogleCheck: () => {}, 
        handleEditChange: () => {},
        onSwitchEditing: () => {}, 
        delTodo: () => {},
        saveEditText: () => {}
    }

    static propTypes = {
        label: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        check: PropTypes.bool.isRequired,
        edit: PropTypes.bool,
        editText: PropTypes.string,
        onToogleCheck: PropTypes.func,
        handleEditChange: PropTypes.func,
        onSwitchEditing: PropTypes.func,
        delTodo: PropTypes.func,
        saveEditText: PropTypes.func
    }

    render() {
        const { label, date, done, edit, check, delTodo, onToogleCheck, handleEditChange, onSwitchEditing, editText, saveEditText } = this.props;
        let className = done ? "completed" : "";
        if (edit && !done) {
            className = "editing"
        }
        const timeAgo = `created ${formatDistanceToNow(new Date(date), { addSuffix: true, includeSeconds: true })}`;

        return (
            <li className={className}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={check} readOnly onClick={onToogleCheck} />
                    <label onClick={onToogleCheck}>
                        <span className="description">{label}</span>
                        <span className="created">{timeAgo}</span>
                    </label>
                    <button className="icon icon-edit" onClick={onSwitchEditing}></button>
                    <button className="icon icon-destroy" onClick={delTodo}></button>
                </div>
                {edit && (
                    <form onSubmit={(evt) => {
                        evt.preventDefault();
                        saveEditText();
                    }}>
                        <input className="edit"
                            type="text"
                            value={editText}
                            onChange={handleEditChange}
                            onBlur={onSwitchEditing}
                            autoFocus />
                    </form>
                )}
            </li>
        );
    }
}