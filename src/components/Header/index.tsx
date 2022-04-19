import { Container } from "./styles"
import logo from '../../assets/logo.png'
import {FaShoppingCart} from 'react-icons/fa'
import { Cart } from "./styles"
import {useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useCart"



export function Header(){
const {cart} = useCart()
const cartSize = cart.length;

  const navigate = useNavigate()
    
    return(
        <Container>
        <a href="#" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo-Music-Moon" />  
        </a>

        <Cart>
            <div>
                <strong onClick={() => navigate('/Cart')}>Meu carrinho</strong>
                <span>
                  {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
                </span>
            </div>
            <FaShoppingCart  onClick={() => navigate('/Cart')}  size={36} color="#FFF" cursor='pointer'/>
        </Cart>
        </Container>
    )
}