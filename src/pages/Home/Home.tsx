import React from 'react';
// others
import { GameContextProvider } from '@/contexts/GameContext';
import Board from '@/components/Board';
// styles
import { HomeContainer } from './styles';

function HomePage() {
  return (
    <GameContextProvider>
      <HomeContainer>
        <Board />
      </HomeContainer>
    </GameContextProvider>
  );
}

export default HomePage;
