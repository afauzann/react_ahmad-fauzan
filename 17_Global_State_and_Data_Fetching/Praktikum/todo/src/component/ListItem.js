import React from 'react';

const ListItem = ({item, hapusListTodo, completeTodo}) => {

    return(
        <div className="list-item">
            <div>
                <input 
                    checked={item.completed && 'checked'}
                    value={item} 
                    type="checkbox" 
                    onChange= {() => {completeTodo(item.completed)}}
                />
                <span
                    style={{ 
                        textDecoration: item.completed && "line-through", 
                        fontStyle: item.completed && "italic", 
                        opacity: item.completed && ".3"}}
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