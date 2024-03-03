import Header from '@components/Header/Header';
import TimerStatus from '@components/TimerStatus/TimerStatus';
import Chronometer from '@components/Chronometer/Chronometer';
import Config from '@components/Config/Config';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <TimerStatus />
      <Chronometer />
      <Config />
    </main>
  );
}
