import ListItem from './ListItem'
import { useSelector, useDispatch } from 'react-redux'
import { hapusListTodo } from '../store/itemSlice'
import { completeTodo } from '../store/itemSlice'

const ListTodo = (props) => {
    const items = useSelector((state) => state.item.items)
    const dispatch = useDispatch()
    return(
        <div>
            {items.map((list) => (
            <ListItem 
            key={list.id} 
            item={list} 
            hapusListTodo={() => {
                dispatch(hapusListTodo(list.id))
            }} 
            completeTodo={() => {
                dispatch(completeTodo(list.id))
            }}
             />
            ))}
        </div>
    )
}


export default ListTodo