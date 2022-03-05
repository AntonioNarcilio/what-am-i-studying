import React from 'react';
import { v4 as uuid } from 'uuid';
// others
import { GameContext } from '@/contexts/GameContext';
import calculateWinner from '@/utils/calculateWinner';
// components
import Square from '@/components/Square';
import Player from '@/components/Player';
import Reset from '@/components/Reset';
import Winner from '@/components/Winner';
import History from '@/components/History';
// styles
import { BoardContainer } from './styles';

export default function Board() {
  const { squares, setWhoIsWinner, history } = React.useContext(GameContext).state;

  React.useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      setWhoIsWinner(winner);
    }
  }, [history, setWhoIsWinner, squares]);

  return (
    <BoardContainer>
      <Player />
      <Winner />
      <Reset />

      <div className="board">
        {squares.map((value:string, index:number) => (
          <Square value={value} index={index} key={uuid()} />
        ))}
      </div>

      <History />
    </BoardContainer>
  );
}
