import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./component/Header";
import InputTodo from "./component/InputTodo";
import ListTodo from "./component/ListTodo";
import "./style.css"

const initialValue = [
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

function Todo() {
    const [data, setData] = useState(initialValue)

    const hapusListTodo = id => {
        setData((oldData) => oldData.filter(item => {
            return item.id !== id;
        }))

    };

    const tambahListTodo = newList => {
        const newTodo = {id : uuidv4(), ...newList};
        setData((oldData) => [...oldData, newTodo]);
    };

        return (
            <>
                <Header text="todos"/>
                <InputTodo tambahListTodo={tambahListTodo}/>
                <ListTodo data={data} hapusListTodo={hapusListTodo}/>
            </>
        )
}

export default Todo