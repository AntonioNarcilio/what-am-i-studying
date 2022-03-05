import React from 'react';
// context
import { GameContext } from '@/contexts/GameContext';
// styles
import { WinnerWrapper } from './styles';

export default function Winner() {
  const { whoIsWinner } = React.useContext(GameContext).state;

  if (!whoIsWinner) {
    return (
      <WinnerWrapper />
    );
  }

  return (
    <WinnerWrapper>
      {whoIsWinner}
      &ensp;ganhou!!!
    </WinnerWrapper>
  );
}
