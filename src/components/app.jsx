import React from "react";
import NewTaskForm from "./newTaskForm";
import TaskList from "./taskList";
import Footer from "./footer";

function App() {

    let Tasks = [
        { label: "Completed task", date: "created 17 seconds ago", key: "1"},
        { label: "Editing task", date: "", key: "2" },
        { label: "Active task", date: "created 5 minutes ago", key: "3" }
    ];

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm />
            </header>
            <section className="main">
                <ul className="todo-list">
                    <TaskList todos={Tasks} />
                </ul>
                <Footer />
            </section>
        </section>
    );
}

export default App;