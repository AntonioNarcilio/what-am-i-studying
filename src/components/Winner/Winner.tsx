import React from 'react';
// context
import { GameContext } from '@/contexts/GameContext';
// styles
import { WinnerWrapper } from './styles';

export default function Winner() {
  const { state: { whoIsWinner } } = React.useContext(GameContext);

  if (!whoIsWinner) {
    return (
      <WinnerWrapper>
        <span style={{ opacity: 0 }}>nada para mostrar</span>
      </WinnerWrapper>
    );
  }

  return (
    <WinnerWrapper>
      {whoIsWinner}
      &ensp;ganhou!!!
    </WinnerWrapper>
  );
}
