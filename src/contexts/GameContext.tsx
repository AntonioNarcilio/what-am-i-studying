import React from 'react';
// others
import GameReducer, { INITIAL_STATE } from '@/redux/GameReducer';
// types
import { ProviderTypes, ContextTypes } from '@/types/game-context.d';

const GameContext = React.createContext({} as ContextTypes);

function GameContextProvider({ children }: ProviderTypes) {
  const [state, dispatch] = React.useReducer(GameReducer, INITIAL_STATE);

  const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export { GameContext, GameContextProvider };
