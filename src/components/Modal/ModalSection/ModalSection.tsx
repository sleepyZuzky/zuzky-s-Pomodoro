import styles from './styles.module.css'
import { ReactNode } from 'react';

export default function ModalSection ({label, children}: {label: string, children: ReactNode }) {
  return <section className={styles.modal__section}>
    <span>
      {label}
    </span>
    
    <div className={styles.modal__options}>
      {children}
    </div>
  </section>
}
