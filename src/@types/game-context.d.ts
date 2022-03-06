import React from 'react';

export type ProviderTypes = {
  children: React.ReactNode;
};

export type HistoryTypes = {
  squares: Array[T];
  isXNext: boolean;
  whoIsWinner: string;
};

export type StateTypes = {
  squares: Array[T];
  isXNext: boolean;
  whoIsWinner: string;
  history: HistoryTypes[];
};

export type ContextTypes = {
  state: StateTypes;
  dispatch: React.Dispatch<React.SetStateAction<any>>;
};
