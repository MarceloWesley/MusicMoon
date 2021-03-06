import { darken, lighten } from 'polished'
import styled from 'styled-components' 

export const Container = styled.div`
padding: 30px;
background: #FFF;
border-radius: 4px;
margin-top: 50px;


footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
     
      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
    }
}

@media (max-width: 670px){
    overflow-x: scroll;
  }
`

export const ProductTable = styled.table`
width: 100%;


thead th {
    color: #999;
    text-align: left;
    padding: 12px;
   
}

tbody td{
    padding: 12px;
    border-bottom: 1px solid #eee;
    
    
}

img{
    height: 90px;
}

strong{
    color: #333;
    display: block;
}

span{
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
}



div{
    display: flex;
    align-items: center;

    input{
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
        text-align: center;
    }
}


button{
    background: none;
    border: 0;
    padding: 6px;
}

svg{
    color: #333;
    transition: color 0.2s;

    &:hover {
        color: ${darken(0.20, '#191920')};
      }
}


    &:disabled {
      svg {
        color: ${lighten(0.25, '#7159c1')};
        cursor: not-allowed;
      }
    }

    @media (max-width: 670px){
    overflow-x: scroll;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }

  @media (max-width: 670px){
    overflow-x: scroll;
  }
 
`;