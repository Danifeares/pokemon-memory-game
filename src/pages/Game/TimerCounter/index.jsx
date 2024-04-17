import { useEffect, useState } from "react";
import { Clock, ModalIsOpen } from "./styles";
import GameOverModal from "../../../components/GameOverModal";

const TimerCounter = ({ setGameTime, gameEnded }) => {
  const [timeSeconds, setTimeSeconds] = useState(2 * 60);
  const [openGameOverModal, setOpenGameOverModal] = useState(false);
  const [pausedTime, setPausedTime] = useState(null);
  const [timeWillRunOut, setTimeWillRunOut] = useState(false);

  const minutes = Math.floor(timeSeconds / 60);
  const seconds = timeSeconds % 60;
  const formatedMinutes = minutes.toString().padStart(2, '0');
  const formatedSeconds = seconds.toString().padStart(2, '0');

  useEffect(() => {
    let timerId;
  
    if (!gameEnded) {
      timerId = setTimeout(() => {
        setTimeSeconds(prevTime => {
          if (prevTime === 0) {
            setOpenGameOverModal(true);
            return prevTime;
          } else {
            return prevTime - 1;
          }
        });
        setTimeWillRunOut(timeSeconds < 15);
      }, 1000);
    } 
    return () => clearTimeout(timerId);
  }, [timeSeconds, gameEnded]);
  

  useEffect(() => {
    if (gameEnded && pausedTime === null) {
      setPausedTime(timeSeconds);
    } 
    if (gameEnded && pausedTime !== null) {
      setGameTime(pausedTime);
    }
  }, [gameEnded, pausedTime, setGameTime, timeSeconds]);

  return (
    <>
      <Clock $background={timeWillRunOut}>
        <p>Tempo:</p>
        <div>
          <span>{formatedMinutes}</span>
          <span>:</span>
          <span>{formatedSeconds}</span>
        </div>
      </Clock>
      {
        openGameOverModal &&
        <ModalIsOpen>
          {openGameOverModal && <GameOverModal setOpenGameOverModal={setOpenGameOverModal} />}
        </ModalIsOpen>
      }

    </>
  );
};

export default TimerCounter;