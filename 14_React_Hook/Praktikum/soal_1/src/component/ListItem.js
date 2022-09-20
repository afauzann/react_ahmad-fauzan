import React, { useState } from 'react';

const ListItem = ({item, hapusListTodo}) => {
    
    const [isCompleted, setIsCompleted] = useState(item.completed);

    const completeHandler = () => {
        setIsCompleted(!isCompleted);
    };

    return(
        <div className="list-item">
            <div>
                <input 
                    checked={isCompleted && 'checked'}
                    value={item} 
                    type="checkbox" 
                    onChange={completeHandler}
                />
                <span
                    style={{ textDecoration: isCompleted && "line-through", fontStyle: isCompleted && "italic", opacity: isCompleted && ".3"}}
                >
                    {item.title}
                </span>
                <input 
                    type="reset" value="Delete" onClick={() => {hapusListTodo(item.id)}}
                />
            </div>   
        </div>
    )
}  

export default ListItem