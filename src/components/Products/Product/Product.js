import React from 'react'
import styles from './Product.module.scss'

const Product = props => {
  return (
    <div tabIndex={props.id} className={styles.product}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={props.img_href} alt={props.title} />
      </div>
      <div className={styles.textContainer}>
        <h2>{props.title}</h2>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{props.description}</p>
        </div>
        <button onClick={props.openModal} tabIndex={props.id} className={styles.button}>Modal {props.id}</button>
      </div>
    </div>
  )
}

export default Product
