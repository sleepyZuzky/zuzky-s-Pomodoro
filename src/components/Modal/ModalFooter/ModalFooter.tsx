import styles from './styles.module.css';
import { useContext } from 'react';
import { PomodoroColor, PomodoroContext, PomodoroFont } from '@providers/PomodoroProvider';

export default function ModalFooter () {
  const {pomodoro, setPomodoro} = useContext(PomodoroContext)
  
  const getElementBySelector = (selector: string): HTMLInputElement | null => document.querySelector(`input[name=${selector}]:checked`) as HTMLInputElement | null;
  const getElementById = (id: string): HTMLInputElement | null => document.getElementById(id) as HTMLInputElement | null ;

  const updateSettings = (): void => {
    const font: PomodoroFont | undefined = getElementBySelector('pomodoroFonts')?.value as PomodoroFont | undefined;
    const color: PomodoroColor | undefined = getElementBySelector('pomodoroColors')?.value as PomodoroColor | undefined;
    const pomodoroTimer: number | undefined = getElementById('pomodoro')?.valueAsNumber;
    const longbreak: number | undefined = getElementById('shortBreak')?.valueAsNumber;
    const shortbreak: number | undefined = getElementById('longBreak')?.valueAsNumber;
    
    setPomodoro({
      ...pomodoro,
      font: font ? font : 'sans-serif',
      color: color ? color : '#F87070',
      pomodoro: pomodoroTimer ? pomodoroTimer : 0,
      shortBreak: shortbreak ? shortbreak : 0,
      longBreak: longbreak ? longbreak : 0
    });
    const modal: HTMLDialogElement | null = document.querySelector('[data-settings-modal]');
    if (modal !== null) modal.close();
  }
  
  return <section id="modal__footer" className={styles.modal__footer}>
    <button style={{backgroundColor: '#F87070', cursor: 'pointer'}} onClick={() => updateSettings()}>
      Apply
    </button>
  </section>
}
