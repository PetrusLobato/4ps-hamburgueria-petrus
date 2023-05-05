import styled from "styled-components";
import '../../style/index.css';


export const LiCards = styled.li`

    min-width: 220px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid var(--grey-20);
    gap: 20px;
    max-height: 350px;

    &:hover{
        border: 2px solid var(--grey-50);
    }

        .nome{
            padding-left: 20px;
            font-size: 18px;
            font-weight: 700;
            color: var(--color-text);
        }

        .nomeDark{
            padding-left: 20px;
            font-size: 18px;
            font-weight: 700;
            color: white;
        }

        .caracter{
            padding-left: 20px;
            font-size: 12px;
            font-weight: 400;
            color: var(--color-text);
        }

        .caracterDark{
            padding-left: 20px;
            font-size: 12px;
            font-weight: 400;
            color: white;
        }



        span {
            padding-left: 20px;
            font-size: 14px;
            font-weight: 600;
            color: var(--color-primary);
        }

        button{
            background-color: var(--color-primary);
            color: var(--color-white);
            width: 80%;
            margin: 0 auto 10px;
            border-radius: var(--border-main);
            border: none;
            height: 40px;

            &:hover{
                filter: brightness(1.1);
                color: var(--color-text);
            }
        }



`

export const FigureCard = styled.figure`

        width: 100%;
        text-align: center;
        background-color: var(--grey-20);
        height: 150px;



        img{
            max-width: 177px;
            width: 100%;
            height: 100%;

            &:hover{
                scale: calc(1.1);
                transition: 1s;
            }
        }

     


`