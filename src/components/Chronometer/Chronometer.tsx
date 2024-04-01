import styles from './styles.module.css';
import { useEffect, useState } from 'react';

export default function Chronometer () {
  const TIMER_RADIUS: number = 170;
  
  const [timer, setTimer] = useState(40);
  const [totalTime, setTotalTime] = useState(50);
  const [dashOffset, setDashOffset] = useState(0);
  
  useEffect((): void => {
    if (document.getElementsByTagName('circle').length > 0) {
      const circle: SVGCircleElement = document.getElementsByTagName('circle')[0]
      const ratio: number = timer / totalTime;
      setDashOffset((1 - ratio) * circle.getTotalLength());
    }
  }, [timer, totalTime]);
  
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
        <div>
          <span>25</span>:<span>50</span>
        </div>
        
        <div id="actions" className={styles.actions}>
          <span>pause</span>
        </div>
      </div>
    </div>
  </section>
}
