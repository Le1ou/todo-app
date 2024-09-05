import React from "react";

export default class Task extends React.Component {

    render() {
        const { label, date, done, check, delTodo, onToogleCheck} = this.props;
        let className = done ? "completed" : "";

        return (
            <li className={className}>
            <div className="view" onClick={onToogleCheck}>
                <input className="toggle" type="checkbox" checked={check} readOnly/>
                <label>
                    <span className="description">{label}</span>
                    <span className="created">{date}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={delTodo}></button>
            </div>
            </li>
        ); 
    }
}