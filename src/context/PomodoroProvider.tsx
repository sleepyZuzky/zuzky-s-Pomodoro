'use client';

import {
  Context,
  createContext,
  ReactNode,
  useEffect,
  useState
} from 'react';

export type PomodoroFont = 'sans-serif' | 'sans' | 'monospace';
export type PomodoroColor = '#F87070' | '#70F3F8' | '#D881F8';

interface PomodoroContextType {
  font: PomodoroFont,
  color: PomodoroColor
  pomodoro: number,
  shortBreak: number,
  longBreak: number,
  currTimer: string
}

const defaultContext: PomodoroContextType = {
  font: 'sans',
  color: '#F87070',
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  currTimer: 'pomodoro',
}

export const PomodoroContext: Context<{
  pomodoro: PomodoroContextType,
  setPomodoro: (pomodoro: PomodoroContextType) => void
}> = createContext({
  pomodoro: defaultContext,
  setPomodoro: (pomodoro: PomodoroContextType) => {},
});

export default function PomodoroProvider ({children}: {children: ReactNode}) {
  const [pomodoro, setPomodoro] = useState(defaultContext);
  
  useEffect(() => {
    localStorage.setItem('config', JSON.stringify(pomodoro));
  }, [pomodoro]);
  
  useEffect((): void => {
    const config: string | null = localStorage.getItem('config');
    const storageData = config ? Object.keys(JSON.parse(config)).length === 0 ? defaultContext : JSON.parse(config) : defaultContext;
    setPomodoro(storageData);
    }, []);
  
  return <PomodoroContext.Provider value={{pomodoro, setPomodoro}}>
    {children}
  </PomodoroContext.Provider>;
}
