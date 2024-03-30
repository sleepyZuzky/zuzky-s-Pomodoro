import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Modal from '@components/Modal/Modal';

export default function Config() {
  return <section id={'configuration'}>
    <FontAwesomeIcon icon={faGear} onClick={() => {
      const modal: HTMLDialogElement = document.querySelector('[data-settings-modal]');
      modal.showModal();
    }}/>
    
    <Modal header='Settings' />
  </section>
}
