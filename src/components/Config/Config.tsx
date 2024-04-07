'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export default function Config () {
  const openModal = (): void => {
    const modal: HTMLDialogElement | null = document.querySelector('[data-settings-modal]');
    if (modal !== null) modal.showModal();
  }
  
  return <section id={'configuration'}>
    <h2 style={{color: '#D7E0FF', cursor: 'pointer'}} onClick={() => openModal()}>
      {<FontAwesomeIcon icon={faGear} className={'cursor-pointer'}/>}
    </h2>
  </section>
}
