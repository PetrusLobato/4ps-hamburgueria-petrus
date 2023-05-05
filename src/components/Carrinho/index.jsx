import React from 'react'
import ListCarrinho from '../ListCarrinho'
import { CarrinhoMain, Total } from './style'

const Carrinho = ({menuOrder, setMenuOrder, count, setCount}) => {

  return (
    <CarrinhoMain> 
        
          <div className='tittle'>
              <h3>Carinho de compras</h3>
          </div>
          
          <ListCarrinho setCount={setCount} count={count} menuOrder={menuOrder}/>
        

        <Total>
            <div className='result'>
                <p>Total</p>
                <p className='valor'>R$ {menuOrder.reduce((accumulator, currentValue) => {return (accumulator + (currentValue.price * currentValue.quantity ))},0) } </p>
            </div>
            <button type='button' onClick={() => setMenuOrder([]) }>Remover todos</button>
        </Total>

    </CarrinhoMain>
  )
}

export default Carrinho