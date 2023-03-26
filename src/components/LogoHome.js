import { Link } from "react-router-dom"
import './LogoHome.css'

const LogoHome = () =>{
    const logo = 'https://aco.cl/imagenes/productos/logo1.png'
    return  (
        <span className='nav-carrito'> 
            <Link className="nav-link icono-home" to="/" >
                <img src={logo} alt="" className="icon-home-logo"/>
            </Link>
            
        </span>
    )
}
export default LogoHome