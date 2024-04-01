import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ActionButton from '@components/Utils/Buttons/ActionButton/ActionButton';

export default function ModalHeader ({label}: {label: string}) {
  const closeModal = (): void => {
    const modal: HTMLDialogElement | null = document.querySelector('[data-settings-modal]');
    if (modal !== null) modal.close();
  }
  
  return <section id="modal__header" className={styles.modal__header}>
      <span>
        {label}
      </span>
    
    <ActionButton
      callback={closeModal}
      cursor={'pointer'}
      backgroundColor={''}
      text={<FontAwesomeIcon icon={faXmark} color={'#ccc'} className={'cursor-pointer'}/>} />
  </section>
}
