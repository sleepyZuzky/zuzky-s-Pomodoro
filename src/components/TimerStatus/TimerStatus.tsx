'use client';

import styles from './styles.module.css';
import { useContext, useState } from 'react';
import { PomodoroContext } from '@providers/PomodoroProvider';

export default function TimerStatus () {
  const { pomodoro, setPomodoro } = useContext(PomodoroContext);
  const [activeBtn, setActiveBtn] = useState<string>('pomodoro')
  
  function toggleTimer (newTimer: string): void {
    setActiveBtn(newTimer);
    setPomodoro({
      ...pomodoro,
      currTimer: newTimer,
    });
  }
  
  return <section id={'timer_option'} className={styles.timer_option}>
    <button className={styles.btn}
            style={{
              backgroundColor: activeBtn === 'pomodoro' ? '#F87070' : '',
              color: activeBtn === 'pomodoro' ? '#1E213F' : '#D7E0FF'
            }}
            onClick={() => toggleTimer('pomodoro')}>
      pomodoro
    </button>
    
    <button className={styles.btn}
            style={{
              backgroundColor: activeBtn === 'shortBreak' ? '#F87070' : '',
              color: activeBtn === 'shortBreak' ? '#1E213F' : '#D7E0FF'
            }}
            onClick={() => toggleTimer('shortBreak')}>
      short break
    </button>
    
    <button className={styles.btn}
            style={{
              backgroundColor: activeBtn === 'longBreak' ? '#F87070' : '',
              color: activeBtn === 'longBreak' ? '#1E213F' : '#D7E0FF'
            }}
            onClick={() => toggleTimer('longBreak')}>
      long break
    </button>
  </section>
}
