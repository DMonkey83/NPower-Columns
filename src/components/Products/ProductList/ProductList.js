import React from 'react'

import Product from '../Product/Product'
import Modal from '../Modal/Modal'
import styles from './ProductList.module.scss'

const ProductList = props => {
  const openModal = event => {
    return props.selectModal(event.target.tabIndex)
  }
  return (
    <div className={styles.list}>
      {
        props.products.map((product, index) => {
          return <Product key={index} {...product} selected={props.selected} openModal={openModal} />
        })
      }
      {
        props.products.map((product, index) => {
          if (product.id === props.selected) {
            return <Modal key={index} {...product} selectModal={props.selectModal} />
          }
          return ''
        })
      }
    </div>
  )
}

export default ProductList
