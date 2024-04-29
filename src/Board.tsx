import { useState } from "react";


function Square({ val,onClickHandle }: { val:string ,onClickHandle:()=>void}) {
  return <button className="h-10 w-10 text-black border border-gray-900 text" onClick={onClickHandle} >{val}</button>
}

export default function Board() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);



  function handleClick(i:number) {
    const nextSquare = value.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setValue(nextSquare);
    setXIsNext(!xIsNext);
  }

    return <div className="mt-3">
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