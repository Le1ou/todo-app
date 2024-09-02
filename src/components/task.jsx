import React from "react";

export default class Task extends React.Component {
    state = {
        done: false,
        check: false
    }

    toBeDone = () => {
        this.setState((prevState => {
            return {
                done: !prevState.done,
                check: !prevState.check
            }
        }))
    }

    toBeCheck = () => {
        this.setState((prevState => {
            return {
                done: prevState.done,
                check: prevState.check
            }
        }))
    }

    render() {
        const { label, date, delTodo} = this.props;
        const { done, check } = this.state;
        let className = done ? "completed" : "";

        return (
            <li className={className}>
            <div className="view" onClick={ this.toBeDone }>
                <input className="toggle" type="checkbox" checked={check} onChange={ this.toBeCheck }/>
                <label>
                    <span className="description">{ label }</span>
                    <span className="created">{ date }</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={delTodo}></button>
            </div>
            </li>
        ); 
    }
}