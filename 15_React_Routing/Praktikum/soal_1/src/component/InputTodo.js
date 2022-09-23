import { useState } from "react";

function InputTodo(props) {
    const [data, setData] = useState({
        title: "",
        completed: false
    })

    const onChange = e => {
        setData({
            ...data,
            [e.target.title]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formIsNotEmpty = data.title
        if (formIsNotEmpty) {
            const newData = {
                title: data.title
            }

            props.tambahListTodo(newData);
            setData({
                title: "",
                completed: false
            })
        } else {
            alert("Data Masih Kosong")
        }
    }

        return (
            <div>
                <div className="input-border">
                     <input 
                    type="text" 
                    placeholder="Add todo..." 
                    value={data.title} 
                    title="title" 
                    onChange={onChange}
                    />
                    <input type="submit" onClick={handleSubmit}/>
                </div>
            </div>
        )
    }

export default InputTodo