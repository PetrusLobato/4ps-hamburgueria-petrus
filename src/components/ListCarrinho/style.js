import styled from "styled-components";
import '../../style/index.css';


export const ListaUl = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px 10px 0;
    height: 275px;
    overflow-y:auto ;
    

    ::-webkit-scrollbar{
        display: none;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height:100%;
    }

    div > h3{
        font-size: 18px;
        font-weight: 700;
    }

    div > p{
        font-size: 14px;
        font-weight: 400;
    }
        
   
    
   

`