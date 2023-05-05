import styled, {keyframes} from "styled-components";
import '../../style/index.css';

export const mudarDark = keyframes`

    0%{
        transform: translateX(0px);
    }
    100%{
        transform: translateX(30px);
    }

`

export const mudarDark2 = keyframes`

    0%{
        transform: translateX(30px);
    }
    100%{
        transform: translateX(0px);
    }

`

export const HeaderMain = styled.header`
    background-color: var(--background-main);
    width: 100%;
    height: 190px;
    box-shadow: 2px 1px 4px 1px rgba(0, 0, 0, 0.2);  

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    


    figure{
        text-align: center;

       
    }


    @media (min-width: 800px){
        flex-direction: row;
        justify-content: space-between;;
        height: 100px;
        padding: 0 10px;
        box-sizing: border-box;
        width: 100%;

    }

    

`

export const DivMain = styled.div`
    width: 90%;
    display: flex;
    position: relative;
    max-width: 365px;
    align-items: center;
    gap: 20px;

    input{
        width: 100%;
        height: 60px;
        border-radius: var(--border-main);
        border: solid 2px var(--grey-20);
        background-color: var(--color-white);
        padding: 0px 10px 0px 15px;

    }

    input::placeholder{
        font-family: var(--fonte-main);
        font-size: 16px;
        font-weight: 300;
    }

    .cardapio{

        background-color: var(--color-primary);
        color: var(--color-white);
        border-radius: var(--border-main);
        width: 106px;
        height: 40px;
        cursor: pointer;
    }


`

export const ButtonMain = styled.button`

    background-color: var(--color-primary);
    color: var(--color-white);
    border-radius: var(--border-main);
    width: 106px;
    height: 40px;
    position: absolute;
    right: 7px;
    top: 11px;
    cursor: pointer;

`

export const ModoDark = styled.div`
    background-color: var(--grey-20);
    min-width: 70px;
    height: 40px;
    border-radius: var(--border-main);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;


    span{
        
    }

    .modoMoon{
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: var( --color-primary);
        border-radius: 50%;
        left: 10px;
        cursor: pointer;
        animation: ${mudarDark} 1s forwards; 
    }

    .modoSun{

        position: absolute;
        width: 20px;
        height: 20px;
        background-color: var( --color-primary);
        border-radius: 50%;
        left: 10px;
        cursor: pointer;
        animation: ${mudarDark2} 1s forwards; 

    }


    svg{
        font-size:17px;
        cursor: pointer;
    }

    .sun {
        color: yellow;
    }

    .moon{
        color: blue;
    }
   


`

