import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
// others
import { GameContext } from '@/contexts/GameContext';
// styles
import { HistoryContainer, HistoryWrapper } from './styles';

export default function History() {
  const {
    history,
    setHistory,
    setSquares,
    setIsXNext,
    setWhoIsWinner,
  } = useContext(GameContext).state;

  function handleClick(index:number) {
    const newHistory = [...history];
    newHistory.splice(index, Number.MAX_SAFE_INTEGER);
    setHistory(newHistory);

    setSquares(history[index].squares);
    setIsXNext(history[index].isXNext);
    setWhoIsWinner(history[index].whoIsWinner);
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
