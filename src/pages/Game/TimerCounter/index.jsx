import { useEffect, useState } from "react";
import { Clock } from "./styles";
import GameOverModal from "../../../components/GameOverModal";
import { ModalIsOpen } from "../styles";
import { convertSecondsToMinutes } from "../utils/convertSecondsToMinutes";

const TimerCounter = ({ setGameTime, gameEnded }) => {
  const startingSeconds = 2 * 60;
  const [initialTimeSeconds, setInitialTimeSeconds] = useState(startingSeconds);
  const [openGameOverModal, setOpenGameOverModal] = useState(false);
  const [pausedTime, setPausedTime] = useState(null);
  const [timeWillRunOut, setTimeWillRunOut] = useState(false);

  const {timeSeconds, timeMinutes} = convertSecondsToMinutes(initialTimeSeconds);

  useEffect(() => {
    let timerId;

    if (!gameEnded) {
      timerId = setTimeout(() => {
        setInitialTimeSeconds(prevTime => {
          if (prevTime === 0) {
            setOpenGameOverModal(true);
            return prevTime;
          } else {
            return prevTime - 1;
          }
        });
        setTimeWillRunOut(initialTimeSeconds < 15);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [initialTimeSeconds, gameEnded]);


  useEffect(() => {
    if (gameEnded && pausedTime === null) {
      setPausedTime(initialTimeSeconds);
    }
    if (gameEnded && pausedTime !== null) {
      setGameTime(startingSeconds - pausedTime);
    }
    
  }, [gameEnded, pausedTime, setGameTime, initialTimeSeconds]);

  return (
    <>
      <Clock $background={timeWillRunOut}>
        <p>Tempo:</p>
        <div>
          <span>{timeMinutes}</span>
          <span>:</span>
          <span>{timeSeconds}</span>
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