import React, { Component } from 'react'

import styles from './Modal.module.scss'

class Modal extends Component {
  handleClose = event => {
    if (event.keyCode === 27) {
      return this.props.selectModal('')
    }
    if (event.target.children[0]
      && event.target.children[0].attributes.name
      && event.target.children[0].attributes.name.value === 'modal') {
      return this.props.selectModal('')
    }
    if (event.target.attributes.name
    && event.target.attributes.name.value) {
      return this.props.selectModal('')
    }
    return ''
  }
  componentDidMount(){
    document.addEventListener("keydown", this.handleClose, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleClose, false);
  }
  render() {
    return (
      <div className={styles.overlay} onClick={this.handleClose}>
        <div autoFocus name='modal' className={styles.container}>
          <h2>Modal {this.props.id} - {this.props.title}</h2>
          <p>{this.props.description}</p>
          <span onClick={this.handleClose} name='close' className={styles.closeButton}>X</span>
        </div>
      </div>
    )
  }
}

export default Modal
