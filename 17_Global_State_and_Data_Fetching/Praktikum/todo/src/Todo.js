
import Header from "./component/Header";
import InputTodo from "./component/InputTodo";
import ListTodo from "./component/ListTodo";
import "./style.css"

function Todo() {
        return (
            <>  
                <Header text="todos"/>
                <InputTodo />
                <ListTodo />
            </>
        )
}

export default Todo