import ListItem from './ListItem'

const ListTodo = (props) => {
    const {data, hapusListTodo,} = props
    return(
        <div>
            {data.map((list) => <ListItem key={list.id} item={list} hapusListTodo={hapusListTodo}/>)}
        </div>
    )
}

export default ListTodo