import React,{useState} from 'react';
import './App.css';
import { Snakeladder } from './Components/Snakeladder';






const App:React.FC=():any=>{
    const [p1Position,setP1Position] =useState<number>(0)
      const [p2Position,setP2Position] =useState<number>(0)
const [dice,setDice]=useState<number>(0)
const [playerTurn,setPlayerTurn]=useState<number>(1)
     const handlemove =new Map<number,number>([
      [1,38],[4,14],[9,31],[17,7],[21,42],[28,84],[51,67],[54,34],[62,19],[64,60],[72,91],[80,99],[87,36],[93,73],[95,75],[98,79]
     ])
  const createBoard =():any=>{
    const board = [];
    for (let i = 100; i >=1; i-=10) {
      
      if(i==10 || i==30 || i==50 || i==70 || i==90){
        for(let j=i-9;j<=i;j++){
          board.push(
            <div key={j} id={`box-${j}`}>{j}
{p1Position===j && <div id="p1">1</div>}
{p2Position===j && <div id="p2">2</div>}
            </div>             
        );
        }
      }
      else{
      for(let j=i;j>i-10;j--){
        
        board.push(
            <div key={j} id={`box-${j}`}>{j}
{p1Position===j && <div id="p1">1</div>}
{p2Position===j && <div id="p2">2</div>}
             
            </div>             
        );
      }
    }
    }
    return board
}

const rollDice=():void=>{
  const dice = Math.floor(Math.random() * 6) + 1;
  setDice(dice)
  let newPosition:any=0
  if(playerTurn===1){
    newPosition=p1Position+dice
    if(newPosition>100){
      newPosition=p1Position
    }
    if(handlemove.has(newPosition)){
      newPosition=handlemove.get(newPosition)
    }
    setP1Position(newPosition)

  }
  else{
    newPosition=p2Position+dice
    if(newPosition>100){
      newPosition=p2Position
    }
    if(handlemove.has(newPosition)){
      newPosition=handlemove.get(newPosition)
      }
      setP2Position(newPosition)

  }
  setPlayerTurn(playerTurn===1?2:1)
  // newPosition = newPosition+ dice
  // console.log(newPosition)
  //  document.getElementById(`box-${newPosition}`).style.backgroundColor="blue"

  if(newPosition==100){
    if(playerTurn==1){
      alert("Player 1 won")
      resetAll()
    }
    else if(playerTurn==2){
      alert("Player 2 won")
      resetAll()
    }
  }
  
  
}

const resetAll=():void=>{
  setP1Position(0)
  setP2Position(0)
  setDice(0)
  setPlayerTurn(1)
}
return (
<div className="App">

  <Snakeladder board={createBoard()} rollDice={rollDice} dice={dice} playerTurn={playerTurn}/>
 
  </div>
  );
}

export default App;
