import React, { useContext } from 'react';
// others
import { GameContext } from '@/contexts/GameContext';
// types
import { SquareTypes } from '@/types/components';
// styles
import { SquareButton } from './styles';

export default function Square({ value, index }: SquareTypes) {
  const {
    state: {
      squares,
      isXNext,
      whoIsWinner,
    },
    dispatch,
  } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';

    dispatch({ type: 'UPDATE_SQUARES', payload: newSquares });
  }

  return (
    <SquareButton type="button" onClick={() => handleClick()}>
      {value}
    </SquareButton>
  );
}
