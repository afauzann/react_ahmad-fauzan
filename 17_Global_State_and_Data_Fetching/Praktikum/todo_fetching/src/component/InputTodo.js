import { useState } from "react";
import { useDispatch } from  "react-redux"
import { createTodo} from "../store/itemSlice"

function InputTodo() {
    const [data, setData] = useState("")
    const dispatch = useDispatch()
    
    const onChange = e => {
        setData(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formIsNotEmpty = data
        if (formIsNotEmpty) {
            dispatch(createTodo({data}));
            setData("")
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
                    value={data} 
                    title="title" 
                    onChange={onChange}
                    />
                    <input type="submit" onClick={handleSubmit}/>
                </div>
            </div>
        )
    }

export default InputTodo