import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Header from '@components/Header/Header';
import TimerStatus from '@components/TimerStatus/TimerStatus';
import Chronometer from '@components/Chronometer/Chronometer';
import Config from '@components/Config/Config';
import PomodoroProvider from '../context/PomodoroProvider';
import Modal from '@components/Modal/Modal';

config.autoAddCss = false;

export default function App () {
  return <main className="flex flex-col items-center justify-evenly w-screen min-w-screen h-screen min-h-screen">
    <section id="pomodoro_container" className="flex flex-col items-center justify-evenly w-50 h-screen">
      <Header/>
      <PomodoroProvider>
        <TimerStatus/>
        <Chronometer/>
        <Config/>
        <Modal header="Settings"/>
      </PomodoroProvider>
    </section>
  </main>
};
