import { useState, useEffect } from 'react';

export function useOrganizedUsers(usersData) {
  const [organizedUsers, setOrganizedUsers] = useState({});

  const generateScore = (time, penalties) => {
    const totalPoints = 3000;
    const score = totalPoints - (time + (penalties * 3));
    return score;
  }

  const organizeUsers = (arrayUsers) => {
    const organizedUsersByDifficulty = {
      easy: [],
      regular: [],
      hard: []
    };

    arrayUsers.forEach(user => {
      const score = generateScore(user.time, user.penalties);
      organizedUsersByDifficulty[user.difficulty].push({...user, score});
    })

    for (const difficulty in organizedUsersByDifficulty) {
      organizedUsersByDifficulty[difficulty].sort((a, b) => b.score - a.score);
      organizedUsersByDifficulty[difficulty] = organizedUsersByDifficulty[difficulty].slice(0, 10);
    }

    return organizedUsersByDifficulty;
  }

  useEffect(() => {
    setOrganizedUsers(organizeUsers(usersData));
  }, [usersData])

  return organizedUsers
}