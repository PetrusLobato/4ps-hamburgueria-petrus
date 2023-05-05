import styled from "styled-components";
import '../../style/index.css';

export const CarrinhoMain = styled.aside`

    width: 90%;
    background-color: rgba(224, 224, 224, 0.6);
    margin: 0 auto;
    max-width: 365px;;
    height: 470px;

    .master{
        width: 100%;
    }

    @media (min-width: 800px){
        margin: 0 0 0 auto;
    }

    .tittle{
        background-color: var(--color-primary);
        height:65px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 0 0 20px;
        border-radius: 8px 8px 0 0 ;

        h3{
            color: white; 
            width: 100%;
            font-size: 18px;
            font-weight: 600;
            font-family: var(--fonte-main);

        }
        
    }

    
`

export const Total = styled.aside`

    width: 92%;
    margin: 10px 0 auto 10px;
    border-top: var(--grey-20) 3px solid;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    
    .result{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 600;
    }

    .valor{
        font-size: 14px;
        font-weight: 600;
        color: var(--grey-50);
    }

    button{
        height: 60px;
        width: 100%;
        margin: 10px auto;
        border: none;
        background-color: var(--grey-20);
        color: var(--grey-50);
        font-size: 16px;
        font-weight: 600;
        border-radius: var(--border-main);


        &:hover{
            border: 1px solid var(--color-primary);
            color: var(--color-primary);
        }
    }

`
