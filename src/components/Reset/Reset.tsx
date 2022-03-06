import React from 'react';
// others
import { GameContext } from '@/contexts/GameContext';
// styles
import { ResetWrapper } from './styles';

export default function Board() {
  const { dispatch } = React.useContext(GameContext);

  function handleClick() {
    dispatch({ type: 'RESET' });
  }

  return (
    <ResetWrapper>
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </ResetWrapper>
  );
}
