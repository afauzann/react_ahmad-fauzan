import Content from "./component/Content";
import Header from "./component/Header";

function Pages({users}) {
    return(
        <>
            <Header text="To Do App"/>
            {users.map((user)=> <Content user={user}/>)}
        </>
    )
}

export default Pages;