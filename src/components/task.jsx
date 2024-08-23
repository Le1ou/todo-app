import React from "react";

function Task( { ...infos } ) {
    return (
        <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>
                <span className="description">{ infos.label }</span>
                <span className="created">{ infos.date }</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    );
}

export default Task;