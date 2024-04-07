'use client'

import styles from './styles.module.css';
import { useContext, useEffect, useState } from 'react';
import { PomodoroContext } from '@providers/PomodoroProvider';

const TIMER_RADIUS: number = 170;
const SECOND: number = 1000;
const MINUTE: number = SECOND * 60;

export default function Chronometer () {
  let interval = null;
  const {pomodoro, setPomodoro} = useContext(PomodoroContext);
  
  const [totalTime, setTotalTime] = useState<number>(pomodoro[pomodoro.currTimer] * MINUTE);
  const [timer, setTimer] = useState<number>(totalTime);
  const [dashOffset, setDashOffset] = useState<number>(0);
  const [pomodoroIntervals, setPomodoroIntervals] = useState<number>(0);
  const [chronometerRunning, setChronometerRunning] = useState<boolean>(true);
  
  useEffect(() => {
    if (document.getElementsByTagName('circle').length > 0) {
      const circle: SVGCircleElement = document.getElementsByTagName('circle')[0]
      const ratio: number = timer / totalTime;
      setDashOffset((1 - ratio) * circle.getTotalLength());
    }
    
    if (pomodoroIntervals !== 0) {
      clearInterval(pomodoroIntervals);
    }
    
    const interval: number = setInterval(() => {
      if (timer === 0) {
        return () => clearInterval(pomodoroIntervals);
      }
      
      setTimer(timer - SECOND);
    }, 1000);
    
    setPomodoroIntervals(interval);
    return () => {
      clearInterval(interval);
      setPomodoroIntervals(0);
    };
  }, [timer, totalTime]);
  
  useEffect(() => {
    clearInterval(pomodoroIntervals);
    
    const newTotalTime: number = pomodoro[pomodoro.currTimer] * MINUTE;
    setTimer(newTotalTime);
    setTotalTime(newTotalTime);
  }, [pomodoro.currTimer]);
  
  function toggleChronometer (interval: number): void {
    if (chronometerRunning) {
      clearInterval(interval);
      setPomodoroIntervals(0);
      setChronometerRunning(false);
    } else {
      const interval: number = setInterval(() => {
        if (timer === 0) {
          return () => clearInterval(pomodoroIntervals);
        }
        
        setTimer(timer - SECOND);
      }, 1000);
      
      setPomodoroIntervals(interval);
      setChronometerRunning(true);
    }
  }
  
  return <section id={'chronometer'}>
    <div id="outter_circle" className={styles.outer_circle}>
      <svg className={styles.loading_container}>
        <circle cx={'50%'} cy={'50%'} r={TIMER_RADIUS}
                strokeLinecap="round"
                className={styles.loading_bar}
                strokeDasharray={2 * Math.PI * TIMER_RADIUS}
                strokeDashoffset={dashOffset}/>
      </svg>

      <div id="chronometer_container" className={styles.chronometer}>
        <h1>
          <span data-minutes>
            {new Date(timer).getMinutes().toString().padStart(2, '0')}
          </span>
          :
          <span data-seconds>
            {new Date(timer).getSeconds().toString().padStart(2, '0')}
          </span>
        </h1>
        
        <h3 className={'cursor-pointer'} onClick={() => toggleChronometer(pomodoroIntervals)}>
          {chronometerRunning ? 'pause' : 'resume'}
        </h3>
      </div>
    </div>
  </section>
}
