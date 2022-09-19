import './assets/style.css'

function Header({text}){
    return (
       <div>
        <h1 className='title'>{text}</h1>
    </div>  
    )
}

export default Header;