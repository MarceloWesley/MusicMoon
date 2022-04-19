import styled from 'styled-components';
import { darken,  lighten } from 'polished';

export const ProductList = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
margin-top: 50px;
gap: 20px;
list-style: none;

li{
    display: flex;
    flex-direction: column;
    background: #FFF;
    padding: 20px;
    justify-content: space-between;
    border-radius: 5px;

    >p{
        margin-top: 0.652rem;
        text-align: left;
    }

    img {
      align-self: center;
      max-width: 250px;
    }

    
}



strong{
    display: block;
    text-align: left;
    font-size: 20px;
}

button{
    background: #191920;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 1.5625rem;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      

      span{
          display: block; 
          margin-left: 0.75rem;
          font-size: 17px; 
      }

      div {
        display: flex;
        align-items: center;
        padding: 0.75rem;
        background: rgba(0, 0, 0, 0.3);

        svg {
            margin-right: 5px;
        }
      }
      
      a{
        margin-right: 0.625rem;
    }

   
}

`