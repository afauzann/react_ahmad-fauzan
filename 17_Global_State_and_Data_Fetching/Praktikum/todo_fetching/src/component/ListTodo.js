import ListItem from './ListItem'
import { useSelector, useDispatch } from 'react-redux'
import {  fetchTodo, updateTodo } from '../store/itemSlice'
import { useEffect } from 'react'

const ListTodo = () => {
    const item = useSelector((state) => state.item)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);
    return(

        <div>
            { item.data.todos_todos?.map((list) => (
            <ListItem 
            key={list.id} 
            item={list} 
            completeTodo={() => {
                dispatch(updateTodo(list))
            }}
             />
            ))}
        </div>
    )
}


export default ListTodo