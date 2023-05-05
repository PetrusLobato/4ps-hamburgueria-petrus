import styled from "styled-components";
import '../../style/index.css';

export const CardsLi = styled.li`

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--fonte-main);


    figure{
        width: 30%;
        min-width: 80px;
        background-color: var(--grey-20);
        border-radius: var(--border-main);

        img{
            width: 100%;
            min-width: 70px;
            height: 100%;
        }
    }

    .description{
        display: flex;
        flex-direction: column;
        gap: 15px;

        .nome{
            font-size: 14px;
            font-weight: 700;
           
        }

        .caracter{
            font-size: 12px;
            font-weight: 400;
        }
    }


`

