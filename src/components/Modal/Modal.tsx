import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'

export default function Modal({header}: {header: string}) {
  return <dialog data-settings-modal className={styles.modal}>
    <section id='modal__header' className={[styles.modal__header, styles.separator].join(' ')}>
      <span>
        {header}
      </span>
      
      <FontAwesomeIcon icon={faXmark} color={'#ccc'} className={'pointer'} onClick={() => {
        const modal: HTMLDialogElement | null = document.querySelector('[data-settings-modal]');
        if (modal !== null) modal.close();
      }}/>
    </section>
    
    <section id='modal__body' className={styles.modal__body}>
      <div>
        <span>Time (minutes)</span>
        
        <div className={[styles.timers, styles.separator].join(' ')}>
          <label className={styles.timer}>
            <span>pomodoro</span>
            <input type='number' defaultValue={0}/>
          </label>
          
          <label className={styles.timer}>
            <span>short break</span>
            <input type='number' defaultValue={0}/>
          </label>
          
          <label className={styles.timer}>
            <span>long break</span>
            <input type='number' defaultValue={0}/>
          </label>
        </div>
      </div>
      
      <div className={styles.separator}>
        Font
      </div>
      
      <div>
        Color
      </div>
      
      <button>
        Apply
      </button>
    </section>
  </dialog>
}
