import './App.css';
import './index.css';
import Header from './components/Header';
import Main from "./components/Main";
import Carrinho from './components/Carrinho';
import { useEffect, useState } from 'react';
import { instance } from './services/api';



const App = () =>  {

  const [ modoDark, setModoDark ] = useState(true);
  const [ menu , setMenu ] = useState([]);
  const [ menuOrder, setMenuOrder ] = useState([]);
  const [ count, setCount ] =useState(1);

  useEffect(() => {

    instance.get('/products')
    .then(response => setMenu(response.data))
    .catch(err => console.log(err))
    // .finally(() => console.log('carregando'))

  },[])

  function addItensCarrinho(elemento){

    const verificationNew = menuOrder.findIndex(verification => elemento.id === verification.id)
    


    if(verificationNew !== -1){

      menuOrder[verificationNew].quantity = menuOrder[verificationNew].quantity + 1

      setMenuOrder([...menuOrder]);
      
      
    }else{
      

      const produto = {

        id: elemento.id,
        name: elemento.name,
        category: elemento.category,
        price: elemento.price,
        img: elemento.img,
        quantity: 1

      }
      setMenuOrder([...menuOrder, produto])
    }

  }

  return (

    <div className={modoDark ? 'container' :"mododarkContainer"}>
        <Header menu={menu} setMenu={setMenu} setModoDark={setModoDark} modoDark={modoDark}/>
        <div className='masterMain'>
          <Main addItensCarrinho={addItensCarrinho} modoDark={modoDark} menu={menu}/>
          <Carrinho setCount={setCount} count={count} setMenuOrder={setMenuOrder} menuOrder={menuOrder}/>
        </div>
    </div>

  );

}

export default App;
