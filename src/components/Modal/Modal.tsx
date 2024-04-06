'use client';

import styles from './styles.module.css'
import ModalHeader from '@components/Modal/ModalHeader/ModalHeader';
import ModalBody from '@components/Modal/ModalBody/ModalBody';
import ModalFooter from '@components/Modal/ModalFooter/ModalFooter';

export default function Modal () {
  return <dialog data-settings-modal className={styles.modal}>
    <ModalHeader label={'Settings'} />
    
    <ModalBody />
    
    <ModalFooter />
  </dialog>
}
