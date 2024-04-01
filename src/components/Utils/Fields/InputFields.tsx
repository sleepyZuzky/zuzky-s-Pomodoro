import styles from './styles.module.css'
import InputNumber from '@components/Utils/InputNumberBtn/NumberBtn';

export default function InputFields ({id, fieldLabel, fieldValue}: {id: string, fieldLabel: string, fieldValue: number }) {
  return <label className={styles.timer}>
    <span>{fieldLabel}</span>
    <InputNumber id={id} value={fieldValue}/>
  </label>
}
