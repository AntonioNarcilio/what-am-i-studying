import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
// others
import { GameContext } from '@/contexts/GameContext';
// styles
import { HistoryContainer, HistoryWrapper } from './styles';

export default function History() {
  const {
    state: { history },
    dispatch,
  } = useContext(GameContext);

  function handleClick(index:number) {
    dispatch({ type: 'UPDATE_HISTORY', payload: [history, index] });
  }

  return (
    <HistoryContainer>
      {history.map((data:any, index: number) => (
        <HistoryWrapper key={uuid()}>
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para jogada
            {' '}
            {index}
          </button>
        </HistoryWrapper>
      ))}
    </HistoryContainer>
  );
}
