import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./component/Header";
import InputTodo from "./component/InputTodo";
import ListTodo from "./component/ListTodo";
import "./style.css"

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
           data : [
                {
                    id: uuidv4(),
                    title: "Mengerjakan Exercise",
                    completed: true
            
                },
                {
                    id: uuidv4(),
                    title: "Mengerjakan Assignment",
                    completed: false
                }
            ]
        }
    }

    hapusListTodo = (id) => {
        const newListTodo = this.state.data.filter((item) => item.id !== id)
        this.setState({data : newListTodo})
    } 

    tambahListTodo = (newList) => {
        const newTodo = {id : uuidv4(), ...newList}
        this.setState({data : [...this.state.data, newTodo]})
    }

    render() {
        return (
            <>
                <Header text="todos"/>
                <InputTodo tambahListTodo={this.tambahListTodo}/>
                <ListTodo data={this.state.data} hapusListTodo={this.hapusListTodo}/>
            </>
        )
    }
}

export default Todo