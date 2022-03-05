import React from 'react';
// types
import { ProviderTypes, ContextTypes, StateTypes } from '@/types/game-context.d';

const GameContext = React.createContext({} as ContextTypes);

function GameContextProvider({ children }: ProviderTypes) {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = React.useState(true);
  const [whoIsWinner, setWhoIsWinner] = React.useState('');
  const [history, setHistory] = React.useState<any[]>([]);

  const state: StateTypes = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setWhoIsWinner,
    history,
    setHistory,
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GameContext.Provider value={{ state }}>
      {children}
    </GameContext.Provider>
  );
}

export { GameContext, GameContextProvider };
