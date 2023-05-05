import React from 'react'
import ItensList from '../ItensList'
import styles from './style.module.css'
import '../../style/index.css'

const Main = ({menu, modoDark, addItensCarrinho}) => {
  return (
    <>
      <div className={styles.productMain}>
          <ItensList addItensCarrinho={addItensCarrinho} modoDark={modoDark} menu={menu}/>
      </div>
    </>
  )
}

export default Main