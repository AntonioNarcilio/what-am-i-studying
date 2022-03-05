import React, { useContext } from 'react';
// others
import { GameContext } from '@/contexts/GameContext';
// types
import { SquareTypes } from '@/types/components';
// styles
import { SquareButton } from './styles';

export default function Square({ value, index }: SquareTypes) {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    history,
    setHistory,
  } = useContext(GameContext).state;

  function handleClick() {
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    setHistory([
      ...history,
      {
        squares: [...squares],
        isXNext,
        whoIsWinner,
      },
    ]);
  }

  return (
    <SquareButton type="button" onClick={() => handleClick()}>
      {value}
    </SquareButton>
  );
}
