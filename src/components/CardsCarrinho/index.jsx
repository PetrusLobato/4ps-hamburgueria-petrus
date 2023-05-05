import React from 'react'
import {FaTrashRestore} from 'react-icons/fa'
import { CardsLi } from './style';

const CardsCarrinho = ({elemento}) => {
  return (

    <CardsLi>

        <figure>
          <img src={elemento.img} alt="" />
        </figure>

        <div className='description'>
            <p className='nome'>{elemento.name}</p>
            <p className='caracter'>{elemento.category}</p>
        </div>

        <span>{elemento.quantity} un</span>
        <FaTrashRestore/>

    </CardsLi>

  )
}

export default CardsCarrinho