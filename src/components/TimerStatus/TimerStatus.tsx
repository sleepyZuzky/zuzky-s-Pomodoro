export default function TimerStatus () {
  return <section id={'timer_status'} className={'flex bg-red-500 px-5 py-5 rounded-full'}>
    <span className={'bg-yellow-600 pt-4 pb-3.5 px-6 rounded-full'}>
      pomodoro
    </span>
    
    <span className={'bg-yellow-600 pt-4 pb-3.5 px-6 rounded-full'}>
      short break
    </span>
    
    <span className={'bg-yellow-600 pt-4 pb-3.5 px-6 rounded-full'}>
      long break
    </span>
  </section>
}
