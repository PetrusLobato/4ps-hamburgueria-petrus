import React from 'react'
import { HeaderMain, ButtonMain, ModoDark, DivMain } from './style'
import logo from '../../img/Burguer4Ps.jpg'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useState } from 'react';


const Header = ({setModoDark, modoDark, setMenu, menu}) => {

  const [ textoInput, setTextoInput ] = useState('');
  

  function search(){
   
    const seachOrganized = textoInput.trim().toLowerCase();

      {
       const categotyMenu = menu.filter(elemento => (
          elemento.category.toLowerCase().includes(seachOrganized) || elemento.name.toLowerCase().includes(seachOrganized)
     
        ))
        setMenu(categotyMenu)
      }
    
    setTextoInput('')

  }

 
 

  function searchMenu(){
    
    setMenu([
       
        {id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14, img: 'https://i.imgur.com/Vng6VzV.png'},

        {id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16, img: 'https://i.imgur.com/soOUeeW.png'},

        {id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18, img: 'https://i.imgur.com/eEzZzcF.png'},

        {id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5, img: 'https://i.imgur.com/YuIbfCi.png'},

        {id: 5, name: 'Coca-Cola', category: 'Bebidas', price: 4.99, img: 'https://i.imgur.com/KC2ihEN.png'},
        
        {id: 6, name: 'Milkshake Ovomaltine', category: 'Bebidas', price: 4.99, img: 'https://i.imgur.com/iNkD4Pq.png'}
    ])

  }

  return (
    
    <div>
       
        <HeaderMain>
       
          <figure>
            <img src={logo} alt="" />
          </figure>

          <ModoDark>
              <span className={modoDark ? 'modoSun' : 'modoMoon'} onClick={() => setModoDark(!modoDark)}></span>
              <BsFillSunFill onClick={() => setModoDark(!modoDark)} className='sun'/>
              <BsFillMoonFill onClick={() => setModoDark(!modoDark)} className='moon'/>
          </ModoDark>

          <DivMain>
            <button type='button' className='cardapio' onClick={()=> searchMenu()} >Cardápio</button>
            <input value={textoInput} onChange={ evento => setTextoInput(evento.target.value)} type="text" placeholder='Digitar Pesquisa' />
            <ButtonMain type='button' onClick={()=> search()}>Pesquisar</ButtonMain>
          </DivMain>

        </HeaderMain>
    </div>
   
    
  )
}

export default Header