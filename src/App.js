import Broad from "./Broad";

import {useState} from "react";

import "./App.css";


function App(){
  const [squares,setSquares]=useState(Array(9).fill(null));
  const [isNext,setNext]=useState(true);
  function handleClick(i){
    
    if(checkWinner(squares) || squares[i]){
      return
    }
    const nextSquares = squares.slice();
    if(isNext){
      nextSquares[i] = "X";
    }
    else{
      nextSquares[i]='O';
    }
    setSquares(nextSquares);
    setNext(!isNext);
  }
  const [sq]=useState(Array(9).fill(null));
  const winner=checkWinner(squares);
  let status;
  if(winner){
    status='Winner : '+winner;
    alert('Winner is '+winner);
    setSquares(sq);
  }
  else{
    status="Next player : "+(isNext?'X':'O');
  }

  function checkWinner(squares){
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for(let i=0;i<lines.length;i++){
      const [a,b,c]= lines[i];
      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
        return squares[a];
      }
    }
    return null;
  } 
  return(
    <>
    <div className="Container-1">
      <div className="Header">
        <h1>TIC TAC TOE GAME</h1>
      </div>
      <hr/>
      <div className="Container-2"><h3>{status}</h3></div>
      <br/>
      <div className="board-row">
        <Broad value={squares[0]} setClick={()=>handleClick(0)} />
        <Broad value={squares[1]} setClick={()=>handleClick(1)}/>
        <Broad value={squares[2]} setClick={()=>handleClick(2)}/>
      </div>
      
      <div className="board-row">
        <Broad value={squares[3]} setClick={()=>handleClick(3)}/>
        <Broad value={squares[4]} setClick={()=>handleClick(4)}/>
        <Broad value={squares[5]} setClick={()=>handleClick(5)}/>
      </div>
      
      <div className="board-row">
        <Broad value={squares[6]} setClick={()=>handleClick(6)}/>
        <Broad value={squares[7]} setClick={()=>handleClick(7)}/>
        <Broad value={squares[8]} setClick={()=>handleClick(8)}/>
      </div>
    </div>
    
    
    </>
  )
}

export default App;