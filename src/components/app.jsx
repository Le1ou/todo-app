import React from "react";
import NewTaskForm from "./newTaskForm";
import TaskList from "./taskList";
import Footer from "./footer";

export default class App extends React.Component {
    state = {
        todoData: [],
        forFilterData: [],
        label: "",
        status: "all",
    }

    componentDidMount() {
        this.setState({ forFilterData: this.state.todoData })
    }

    createItem(label) {
        return {
            label: label,
            date: Date.now(),
            id: Math.random().toString(36).slice(2),
            done: false,
            check: false,
            edit: false,
            editText: label
        }
    }

    createData = (label) => {
        this.setState(prevState => {
            const newItem = this.createItem(label);
            const newData = [...prevState.todoData, newItem]
        return {
            todoData: newData,
            forFilterData: newData
        }
        })
    }

    deleteTodo = (id) => {
        this.setState((prevState => {
            const index = prevState.todoData.findIndex(el => el.id === id)
            if (index === -1) {
                return prevState;
            }
            const newData = [...prevState.todoData.slice(0, index), ...prevState.todoData.slice(index+1)
            ];

            return {
                todoData: newData,
                forFilterData: newData
            }
        }))
    }

    onToogleCheck = (id) => {
        this.setState(prevState => {
            const index = prevState.todoData.findIndex(el => el.id === id);
            if (index === -1) {
                return prevState;
            }
            const item = prevState.todoData[index];
            const newItem = {
                            ...item,
                            done: !item.done,
                            check: !item.check}
            const newData = [...prevState.todoData.slice(0, index), newItem, ...prevState.todoData.slice(index+1)]

            return {
                todoData: newData,
                forFilterData: newData
            }
        })
    }

    onSwitchEditing = (id) => {
        this.setState(prevState => {
            const index = prevState.todoData.findIndex(el => el.id === id);
            if (index === -1) {
                return prevState;
            }
            const item = prevState.todoData[index];
            const newItem = {
                            ...item,
                            edit: !item.edit}
            const newData = [...prevState.todoData.slice(0, index), newItem, ...prevState.todoData.slice(index+1)]

            return {
                todoData: newData,
                forFilterData: newData
            }
        })
      };
    
    handleEditChange = (id, value) => {
        this.setState(prevState => {
            const index = prevState.todoData.findIndex(el => el.id===id);
            if (index === -1) {
                return prevState;
            }
            const item = prevState.todoData[index];
            const newItem = {
                            ...item,
                            editText: value}
            const newData = [...prevState.todoData.slice(0, index), newItem, ...prevState.todoData.slice(index+1)]

            return {
                todoData: newData,
                forFilterData: newData
            }
        })
      };

    saveEditText = (id) => {
        this.setState(prevState => {
            const index = prevState.todoData.findIndex(el => el.id === id);
            if (index === -1) {
                return prevState;
            }
            const item = prevState.todoData[index];
            const newItem = {
                            ...item,
                            label: item.editText,
                            edit: false}
            const newData = [...prevState.todoData.slice(0, index), newItem, ...prevState.todoData.slice(index+1)]

            return {
                todoData: newData,
                forFilterData: newData
            }
        })
    }

    onLabelChange = (evt) => {
        this.setState({
            label: evt.target.value
        })
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        if (this.state.label.trim()==="") return;
        this.createData(this.state.label);
        this.setState({ label: "" })
    }

    filterTodos = (status) => {
        this.setState({status})
        const filteredData = this.state.forFilterData.filter(el => {
            if (status==="active") return !el.done;
            if (status==="completed") return el.done;
            return true;
        })
        this.setState({todoData: filteredData})
    }

    clearData = () => {
        this.setState(prevState => {
            const newData = prevState.forFilterData.filter(el => !el.done)
            return {
                todoData: newData,
                forFilterData: newData,
                status: "all"
            }
        })
    } 

    render() {
        const todoCount = this.state.forFilterData.filter(el => !el.done).length;

        return (
            <section className="todoapp">
                <form className="header"
                      onSubmit={this.onSubmit}>
                    <h1>todos</h1>
                    <NewTaskForm onLabelChange={this.onLabelChange}
                                 label={this.state.label}/>
                </form>
                <section className="main">
                    <ul className="todo-list">
                        <TaskList todos={this.state.todoData}
                                  delTodo={this.deleteTodo}
                                  onToogleCheck={this.onToogleCheck}
                                  saveEditText={this.saveEditText}
                                  handleEditChange={this.handleEditChange}
                                  onSwitchEditing={this.onSwitchEditing}/>
                    </ul>
                    <Footer status={this.state.status}
                            todoCount={todoCount}
                            filterTodos={this.filterTodos}
                            clearData={this.clearData}/>
                </section>
            </section>
        );
    }
}