import React, { useState } from 'react';

const ListItem = ({item, hapusListTodo}) => {
    
    const [isCompleted, setIsCompleted] = useState(item.completed);

    const completeHandler = () => {
        setIsCompleted(!isCompleted);
    };

    return(
        <div className="list-item">
            <div style={{ textDecoration: isCompleted && "line-through", fontStyle: isCompleted && "italic", opacity: isCompleted && ".6"}}>
                <input 
                checked={isCompleted && 'checked'}
                value={item} 
                type="checkbox" 
                onChange={completeHandler}
                />
                {item.title} 
                <input type="reset" value="Delete" onClick={() => {hapusListTodo(item.id)}}/> 
            </div> 
        </div>
    )
}  

export default ListItem