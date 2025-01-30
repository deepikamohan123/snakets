import React, { useState } from 'react';

import '../Styles/Snake.css';

interface SnakeladderProps {
  board: any; 
  rollDice: () => void;
  dice: number;
  playerTurn: number;
}

export const Snakeladder: React.FC<SnakeladderProps> = ({ board, rollDice, dice, playerTurn }) => {
  return (
    <div className="Snakeladder">
      <div className="container">{board}</div>
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiJ79RoPBaqgeEnqStDmCE0_ffBYnQ6BCxgmGqqSNK7Jf3jk4j-doCCe6fDWi89xR2oJN-0ToVzLEXRX6M1g8gsDwoZoROW2RaENTfCcKLy9ueiRq97ZYoCJI6_nbQ9F3lA4mrZ7qPbOE/s1600/smp+sidi.jpg" alt="Snake Board" />
      <p id="dice">{dice}</p>
      <p id="player">Player {playerTurn}</p>
      <button onClick={rollDice}>Roll</button>
    </div>
  );
};
