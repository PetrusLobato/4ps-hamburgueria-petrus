import styled from "styled-components";
import '../../style/index.css';

export const UlProducts = styled.ul`

    display: flex;
    gap: 30px;
    overflow-x: auto;
    width: 90%;
    margin: 0 auto 25px;

    ::-webkit-scrollbar{
        display: none;
    }

  

    @media (min-width: 800px){
        flex-wrap: wrap;
        width: 100%;
        margin: 0;
        gap: 40px;
        height: 100%;
        
     
    }

`