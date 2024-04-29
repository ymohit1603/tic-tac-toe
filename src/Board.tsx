import { useState } from "react";


function Square({ val,onClickHandle }: { val:string ,onClickHandle:()=>void}) {
  return <button className="h-10 w-10 text-black border border-gray-900 text" onClick={onClickHandle} >{val}</button>
}

export default function Board() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);



  function handleClick(i: number) {
    if (value[i] || calculateWinner(value)) {
      return;
    }
    const nextSquare = value.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setValue(nextSquare);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(value);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return <div className="mt-3">
      <div className="status">{status}</div>
      <div className="flex">
        <Square val={value[0]} onClickHandle={() => handleClick(0)} />
        <Square val={value[1]} onClickHandle={() => handleClick(1)} />  
        <Square val={value[2]} onClickHandle={() => handleClick(2)} /> 
      </div>
      <div className="flex">
        <Square val={value[3]} onClickHandle={() => handleClick(3)} /> 
        <Square val={value[4]} onClickHandle={() => handleClick(4)} /> 
        <Square val={value[5]} onClickHandle={() => handleClick(5)} /> 
      </div>
      <div className="flex">
        <Square val={value[6]} onClickHandle={() => handleClick(6)} />
        <Square val={value[7]} onClickHandle={() => handleClick(7)} /> 
        <Square val={value[8]} onClickHandle={() => handleClick(8)} /> 
      </div>
    </div>
}
  
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}