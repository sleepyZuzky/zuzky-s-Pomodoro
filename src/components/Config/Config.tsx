import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import ActionButton from '@components/Utils/Buttons/ActionButton/ActionButton';
'use client';

export default function Config () {
  const openModal = (): void => {
    const modal: HTMLDialogElement | null = document.querySelector('[data-settings-modal]');
    if (modal !== null) modal.showModal();
  }
  
  return <section id={'configuration'}>
    <ActionButton
      callback={openModal}
      backgroundColor={''}
      cursor={'pointer'}
      text={<FontAwesomeIcon icon={faGear} className={'cursor-pointer'}/>}/>
  </section>
}
