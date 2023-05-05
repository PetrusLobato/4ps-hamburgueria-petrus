import React from 'react'
import Cards from '../Cards'
import {UlProducts} from './style'


const ItensList = ({menu, modoDark, addItensCarrinho}) => {
  return (
    <UlProducts>

      {
        menu.map((elemento) => (
          
          <Cards addItensCarrinho={addItensCarrinho} modoDark={modoDark} key={elemento.id} elemento={elemento}/>

        ))
      }
      
    </UlProducts>
  )
}

export default ItensList