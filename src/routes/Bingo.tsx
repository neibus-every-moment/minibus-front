import React, { useEffect, useState } from 'react';

function Bingo() {
  const initialBingoBoard = [...new Array(16)].map((v, i) => i + 1);
  const [bingoBoard, setBingoBoard] = useState(initialBingoBoard);

  // TODO: 나중에 서버에서 24시간마다 새 빙고판 가져오도록
  // useEffect(() => {
  // setBingoBoard();
  // }, [])

  return (
    <div className="container">
      <div className="bingo">
        <div className="row">
          <div className="col-sm-4 bingo-info">
            <h5 className="bingo-info-title">도전! 일상 빙고</h5>
            <p>
                이동 중 마주친<br />
                일상 속 소소한 순간들을<br />
                빙고판에 남겨보세요
            </p>
          </div>
          <div className="col-sm-4">
            <div>0 빙고!</div>
            <ul className="bingo-board">
              {bingoBoard.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-sm-4">
            <button className="bingo-share_btn">
              내 빙고 공유하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bingo;
