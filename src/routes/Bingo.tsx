import React, { useEffect, useState } from 'react';

function Bingo() {
  const initialBingoBoard = [
    '오늘의 빙고 어쩌구',
    '내일의 빙고 저쩌구',
    '이러쿵 저러쿵',
    '동네 강아지와 마주쳤다',
    '오늘의 출근/등교 패션',
    '텀블러와 함께',
    '유선 이어폰 사용자 발견',
    '오늘의 빙고 어쩌구',
    '내일의 빙고 저쩌구',
    '이러쿵 저러쿵',
    '동네 강아지와 마주쳤다',
    '오늘의 출근/등교 패션',
    '텀블러와 함께',
    '유선 이어폰 사용자 발견',
    '화면 채우기',
    '화면 채우기',
  ];
  const [bingoBoard, setBingoBoard] = useState(initialBingoBoard);
  const [bingoCount, setBingoCount] = useState(0);

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
            <div className="bingo-count">{bingoCount} 빙고!</div>
            <ul className="bingo-board">
              {bingoBoard.map(item => (
                <li key={item}>
                  <div>
                    {item}
                  </div>
                </li>
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
