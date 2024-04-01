import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import { ReactElement, useEffect, useState } from 'react';

interface InputNumberType {
  id: string,
  value: number
}

export default function InputNumber ({id, value}: InputNumberType) {
  const [inputValue, setInputValue] = useState<number>(value)
  
  const updateInputValue = (type: string): void => {
    let newValue: number = type === 'add' ? inputValue + 1 : inputValue - 1;
    if (newValue < 0) newValue = 0;
    setInputValue(newValue);
  }
  
  return <div className={styles.input_number}>
    <input
      id={id}
      type="number"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.valueAsNumber)}/>
    <div className={styles.custom_number_spin}>
      <FontAwesomeIcon icon={faChevronUp} onClick={() => updateInputValue('add')}/>
      <FontAwesomeIcon icon={faChevronDown} onClick={() => updateInputValue('subtract')}/>
    </div>
  </div>
}
