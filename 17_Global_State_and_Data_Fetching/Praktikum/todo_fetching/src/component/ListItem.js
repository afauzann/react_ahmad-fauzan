import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/itemSlice';

const ListItem = ({item, completeTodo}) => {
    const dispatch = useDispatch()
    const hapusListTodo = (data) => {
    dispatch(deleteTodo(data))
    }

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
                    type="reset" value="Delete" onClick={() => {hapusListTodo({id:item.id})}}
                />
            </div>   
        </div>
    )
}  

export default ListItem