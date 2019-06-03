import React from 'react'

import ProductList from './Products/ProductList/ProductList'
import { LogoSVG } from './svg/logo'
import styles from './Main.module.scss'

const Main = (props) => {
  return (
    <div className='main-container'>
      <div className='content-container'>
        <div className={styles.logo}>
          <LogoSVG  />
        </div>
        <div>
          <ProductList {...props}/>
        </div>
      </div>
    </div>
  )
}

export default Main