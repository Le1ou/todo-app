import React from "react";
import NewTaskForm from "./newTaskForm";
import TaskList from "./taskList";
import Footer from "./footer";

export default class App extends React.Component {
    state = {
        todoData: [
        { label: "Completed task", date: "created 17 seconds ago", id: "1"},
        { label: "Editing task", date: "", id: "2" },
        { label: "Active task", date: "created 5 minutes ago", id: "3" }
        ]
    }

    deleteTodo = (id) => {
        this.setState((prevState => {
            const el = prevState.todoData.findIndex(el => el.id === id)
            const newData = [
                ...prevState.todoData.slice(0, el),
                ...prevState.todoData.slice(el+1)
            ];

            return {
                todoData: newData
            }
        }))
    }

    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm />
                </header>
                <section className="main">
                    <ul className="todo-list">
                        <TaskList todos={this.state.todoData} delTodo={ this.deleteTodo }/>
                    </ul>
                    <Footer />
                </section>
            </section>
        );
    }
}