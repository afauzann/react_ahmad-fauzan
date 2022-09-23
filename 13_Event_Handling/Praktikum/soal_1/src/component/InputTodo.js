import { Component } from "react";

class InputTodo extends Component {
    state= {
        title: "",
        completed: false
    }

    onChange = e => {
        this.setState({
            [e.target.title]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = this.state.title
        if (formIsNotEmpty) {
            const newData = {
                title: this.state.title
            }

            this.props.tambahListTodo(newData);
            this.setState({
                title: "",
                completed: false
            })
        } else {
            alert("Data Masih Kosong")
        }
    }

    render() {
        return (
            <div>
                <div className="input-border">
                     <input 
                    type="text" 
                    placeholder="Add todo..." 
                    value={this.state.title} 
                    title="title" 
                    onChange={this.onChange}
                    />
                    <input type="submit" onClick={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

export default InputTodo