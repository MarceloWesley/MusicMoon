import styled from "styled-components";


export const Container = styled.div`
color: white;
margin-top: 60px;
display: flex;
justify-content: space-between;

`


export const Cart = styled.div`
display: flex;

strong{
    cursor: pointer;
}


span{
    display: block;
    text-align: right;
    color: #999;
}

div{
    margin-right: 0.375rem;
}


@media (max-width: 654px){
    span{
        font-size: 12px;
    }

    strong{
        font-size: 12px;
    }

 
    
}

@media (max-width: 400px){
div{
    display: none;
}
}
`