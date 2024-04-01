import styles from './styles.module.css';
import { ReactElement, ReactNode, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { PomodoroContext } from '@providers/PomodoroProvider';
import ModalSection from '@components/Modal/ModalSection/ModalSection';
import InputFields from '@components/Utils/Fields/InputFields';
import Radio from '@components/Utils/Selects/Radio/Radio';

interface RadioOptionType {
  id: string,
  label: ReactElement | string,
  styles: {
    backgroundColor: string,
  },
  labelStyles?: {
    fontFamily: string,
  },
  value: string
}

export interface RadioOptionsType {
  name: string,
  values: RadioOptionType[]
}

export default function ModalBody () {
  const {pomodoro, setPomodoro} = useContext(PomodoroContext);
  
  const test = '';
  const checkIcon = () => <FontAwesomeIcon icon={faCheck}/>
  const inputField = (id: string, value: number) => <InputFields id={id} fieldLabel={id} fieldValue={value}/>
  const fontOptions: RadioOptionsType = {
    name: 'pomodoroFonts',
    values: [
      {
        id: 'aa_monospace',
        label: 'Aa',
        value: 'monospace',
        styles:{backgroundColor: '#EFF1FA'},
        labelStyles: {fontFamily: 'monospace'}
      },
      {
        id: 'aa_sans',
        label: 'Aa',
        value: 'sans',
        styles:{backgroundColor: '#EFF1FA'},
        labelStyles: {fontFamily: 'sans'}
      },
      {
        id: 'aa_sans_serif',
        label: 'Aa',
        value: 'sans-serif',
        styles:{backgroundColor: '#EFF1FA'},
        labelStyles: {fontFamily: 'sans-serif'}
      },
    ]
  };
  const colorOptions: RadioOptionsType = {
    name: 'pomodoroColors',
    values: [
      {id: 'red', label: checkIcon(), styles:{backgroundColor: '#F87070'}, value: '#F87070'},
      {id: 'cyan', label: checkIcon(), styles:{backgroundColor: '#70F3F8'}, value: '#70F3F8'},
      {id: 'violer', label: checkIcon(), styles:{backgroundColor: '#D881F8'}, value: '#D881F8'},
    ]
  };
  
  return <section id="modal__body" className={styles.modal__body}>
    <ModalSection label={'Time (minutes)'}>
      {inputField('pomodoro', pomodoro.pomodoro)}
      {inputField('shortBreak', pomodoro.shortBreak)}
      {inputField('longBreak', pomodoro.longBreak)}
    </ModalSection>
    
    <ModalSection label={'Font'}>
      <Radio options={{name: 'pomodoroFonts', values: []}} canHide={false}/>
    </ModalSection>
    
    <ModalSection label={'Color'}>
      <Radio options={{name: 'pomodoroColors', values: []}} canHide={true}/>
    </ModalSection>
  </section>
}
