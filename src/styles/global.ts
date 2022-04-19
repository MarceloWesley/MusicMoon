import {createGlobalStyle} from 'styled-components';
import background from '../assets/background.svg'
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
}

body{
    font-family: Roboto, 'sans-serif';
    -webkit-font-smoothing: antialiased;
    background: #191920 url(${background}) no-repeat center top;

}



#root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
}

button{
    cursor: pointer;
}


`
