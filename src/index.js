import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { finished } from 'stream';

const cells = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
const Cell = function (props){
    return(
        <div className="cell">
            {props.text}
        </div>
    )
}
const [n, setN] = useState(0)
const tell = (cells) => {
    if(cells[0][0] === cells[0][1] && cells[0][1] === cells[0][2]
        && cells[0][0] !== null){
            console.log(cells[0][0] + '赢')
            setFinished(true)
        }
}
const onClickCell = (row,col) => {
    // n + 1
    setN(n + 1)
    // 改变 cells
    const copy = JSON.parse(JSON.stringify(cells))
    copy[row][col] = n % 2 === 0 ? 'X' : 'O'
    setCells(copy)
    // 判断输赢
    tell(classProperty)
}
const Chessboard = function(){
    return (
        <div>
            <div>n:{n}</div>
            {cells.map((items,row) =><div className="row">
                {items.map((item, col) =><div className="col">
                    <Cell text={item} onClick={() => onClickCell(row,col)}/>
                </div>)}
             </div>)}
            {finished && <div className="gameOver">游戏结束</div>}
        </div>
    )
}

ReactDOM.render(<Chessboard />, document.getElementById('root'));
