import { useEffect, useState } from "react";
import { Clock } from "./styles";

const TimerCounter = ({ setGameTime }) => {

  const [timeSeconds, setTimeSeconds] = useState(0);
  //setGameTime(timeSeconds);

  const minutes = Math.floor(timeSeconds / 60);
  const seconds = timeSeconds % 60;
  const formatedMinutes = minutes.toString().padStart(2, '0');
  const formatedSeconds = seconds.toString().padStart(2, '0');

  useEffect(() => {
    setTimeout(() => {
      setTimeSeconds(timeSeconds + 1)
    }, 1000)
  }, [timeSeconds])

  return (
    <Clock>
      <p>Tempo:</p>
      <div>
        <span>{formatedMinutes}</span>
        <span>:</span>
        <span>{formatedSeconds}</span>
      </div>
    </Clock>
  )
}

export default TimerCounter;