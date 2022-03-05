import React, { useContext } from 'react';
// others
import { GameContext } from '@/contexts/GameContext';
// styles
import { ResetWrapper } from './styles';

export default function Board() {
  const {
    setSquares, setIsXNext,
    setWhoIsWinner, setHistory,
  } = useContext(
    GameContext,
  ).state;

  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner('');
    setHistory([]);
  }

  return (
    <ResetWrapper>
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </ResetWrapper>
  );
}
