import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function ModalHeader ({label}: {label: string}) {
  const closeModal = (): void => {
    const modal: HTMLDialogElement | null = document.querySelector('[data-settings-modal]');
    if (modal !== null) modal.close();
  }
  
  return <section id="modal__header" className={styles.modal__header}>
      <span>
        {label}
      </span>
    
    <button style={{cursor: 'pointer'}} onClick={() => closeModal()}>
      {<FontAwesomeIcon icon={faXmark} color={'#ccc'} className={'cursor-pointer'}/>}
    </button>
  </section>
}
