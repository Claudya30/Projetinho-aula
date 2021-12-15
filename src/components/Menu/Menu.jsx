import { Link } from 'react-router-dom'
import './menu.styles.css'
import {FaHandHoldingHeart} from 'react-icons/fa'

const Menu = () =>{
  return(
    <ul className="navbar">

<li>
        <Link className="link" to="/logo"><FaHandHoldingHeart size={60} color="rgb(56,56,56)"/></Link>
      </li>
      
      <li>
        <Link className="link" to="/">Home</Link>
      </li>

      <li>
        <Link  className="link" to="/sobre">Sobre</Link>
      </li>

      <li>
        <Link className="link" to="/direitos">Direitos</Link>
      </li>

      <li>
        <Link className="link" to="/contato">Contato</Link>
      </li>

      
      
      
    </ul>
  )
}

export default Menu