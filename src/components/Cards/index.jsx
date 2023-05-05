import React from 'react'
import {LiCards, FigureCard} from './style'

const Cards = ({elemento, modoDark, addItensCarrinho}) => {

  return (
    <LiCards>
        <FigureCard>
          <img src={elemento.img} alt={elemento.name} />
        </FigureCard>
        <p className={modoDark ? 'nome' : 'nomeDark'}>{elemento.name}</p>
        <p className={modoDark ? 'caracter' : 'caracterDark'}>{elemento.category}</p>
        <span>R$ {(elemento.price).toString().length > 2 ? (elemento.price).toString().replace('.', ',') : `${elemento.price},00`}</span>
        <button type='button' onClick={()=> addItensCarrinho(elemento)} >Adicionar</button>
    </LiCards>
  )
}

export default Cards