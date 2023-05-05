import React from 'react'
import CardsCarrinho from '../CardsCarrinho'
import { ListaUl } from './style'

const ListCarrinho = ({menuOrder, count}) => {
  return (
    <ListaUl>  


      {
        menuOrder.length ? (

          menuOrder.map(elemento => (

            <CardsCarrinho count={count} elemento={elemento}/>

          ))

        ) 
        :
        <div>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      }
       
  
    </ListaUl>
  )
}

export default ListCarrinho


