import React from 'react';

export type ProviderTypes = {
  children: React.ReactNode;
};

export type StateTypes = {
  squares: Array[null];
  setSquares: React.Dispatch<React.SetStateAction<any[]>>;
  isXNext: boolean;
  setIsXNext: React.Dispatch<React.SetStateAction<boolean>>;
  whoIsWinner: string;
  setWhoIsWinner: React.Dispatch<React.SetStateAction<string>>;
  history: Array;
  setHistory: React.Dispatch<React.SetStateAction<any[]>>;
};

export type ContextTypes = {
  state: StateTypes;
};
