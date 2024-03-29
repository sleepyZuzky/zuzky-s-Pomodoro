import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export default function Config() {
  return <section id={'configuration'}>
    <FontAwesomeIcon icon={faGear} />
    Settings
    
    Time (minutes)
    pomodoro
    short break
    long break
    
    Font
    Color
    
    Apply
  </section>
}
