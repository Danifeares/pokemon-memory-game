import { useState } from 'react';
import Scoreboard from '../Scoreboard';

export function useShowScoreboard(organizedUsers) {
  const [ranking, setRanking] = useState('');

  const scoreboards = {
    easy: <Scoreboard array={organizedUsers[ranking]} />,
    regular: <Scoreboard array={organizedUsers[ranking]} />,
    hard: <Scoreboard array={organizedUsers[ranking]} />,
  }

  return ({
    scoreboard: scoreboards[ranking],
    setRanking
  })
}