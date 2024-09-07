import React from "react";
import TasksFilter from "./tasksFilter";
import PropTypes from "prop-types";

function Footer( { todoCount, status, filterTodos, clearData } ) {
    return (
        <footer className="footer">
            <span className="todo-count">{todoCount} items left</span>
            <ul className="filters">
                <TasksFilter status={status}
                             filterTodos={filterTodos}/>
            </ul>
            <button className="clear-completed" onClick={clearData}>Clear Completed</button>
        </footer>
    );
}

Footer.defaultProps = {
    todoCount: 0,
    filterTodos: () => {},
    clearData: () => {}
}

Footer.propTypes = {
    todoCount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    filterTodos: PropTypes.func,
    clearData: PropTypes.func
}

export default Footer;