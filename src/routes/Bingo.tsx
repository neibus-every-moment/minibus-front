import React, { useEffect, useState } from 'react';

import BingoShare from '../components/BingoShare';

interface BingoItemProps {
  index: number,
  content: string
  isSelected: boolean;
}
function Bingo() {
  const initialBingoBoard: BingoItemProps[] = [
    {
      index: 1,
      content: '오늘의 빙고 어쩌구',
      isSelected: false,
    },
    {
      index: 2,
      content: '오늘의 빙고 저쩌구',
      isSelected: false,
    },
    {
      index: 3,
      content: '오늘의 빙고 어쩌구',
      isSelected: false,
    },
    {
      index: 4,
      content: '오늘의 빙고 저쩌구',
      isSelected: false,
    },
    {
      index: 5,
      content: '오늘의 빙고 어쩌구',
      isSelected: false,
    },
    {
      index: 6,
      content: '오늘의 빙고 저쩌구',
      isSelected: false,
    },
    {
      index: 7,
      content: '오늘의 빙고 어쩌구',
      isSelected: false,
    },
    {
      index: 8,
      content: '오늘의 빙고 저쩌구',
      isSelected: false,
    },
    {
      index: 9,
      content: '오늘의 빙고 어쩌구',
      isSelected: false,
    },
    {
      index: 10,
      content: '오늘의 빙고 저쩌구',
      isSelected: false,
    },
    {
      index: 11,
      content: '오늘의 빙고 어쩌구',
      isSelected: false,
    },
    {
      index: 12,
      content: '오늘의 빙고 저쩌구',
      isSelected: false,
    },
    {
      index: 13,
      content: '오늘의 빙고 어쩌구',
      isSelected: false,
    },
    {
      index: 14,
      content: '오늘의 빙고 저쩌구',
      isSelected: false,
    },
    {
      index: 15,
      content: '오늘의 빙고 어쩌구',
      isSelected: false,
    },
    {
      index: 16,
      content: '오늘의 빙고 저쩌구',
      isSelected: false,
    },
  ];
  const [bingoBoard, setBingoBoard] =
    useState<BingoItemProps[]>(initialBingoBoard);
  const [bingoCount, setBingoCount] = useState(0);
  const bingoMatrix = [
    [...bingoBoard.map(({ isSelected }) => isSelected).slice(0, 4)],
    [...bingoBoard.map(({ isSelected }) => isSelected).slice(4, 8)],
    [...bingoBoard.map(({ isSelected }) => isSelected).slice(8, 12)],
    [...bingoBoard.map(({ isSelected }) => isSelected).slice(12, 16)],
  ];
  const [shareView, setShareView] = useState(true);

  // TODO: 나중에 서버에서 24시간마다 새 빙고판 가져오도록
  // useEffect(() => {
  // setBingoBoard();
  // }, [])

  const handleToggleBingo = (index: number) => {
    setBingoBoard(bingoBoard => (
      bingoBoard.map(
        item => (
          item.index === index
            ? { ...item, isSelected: !item.isSelected }
            : item
        )
      )));
  };

  const checkBingo = () => {
    let count = 0;
    // 가로
    bingoMatrix.forEach((row) => {
      if (row.reduce((acc, cur) => acc + Number(cur), 0) === 4) {
        count++;
      }
    });

    // 세로
    bingoMatrix.forEach((row, i) => {
      let bingo = true;
      row.forEach((_, j) => {
        bingo = bingo && bingoMatrix[j][i];
      });
      if (bingo) {
        count++;
      }
    });

    // 대각선
    let diagonalOne = true;
    let diagonalTwo = true;
    bingoMatrix.forEach((_, i) => {
      diagonalOne = diagonalOne && bingoMatrix[i][3 - i];
      diagonalTwo = diagonalTwo && bingoMatrix[i][i];
    });

    if (diagonalOne) {
      count++;
    }

    if (diagonalTwo) {
      count++;
    }

    setBingoCount(count);
  };

  const handleClickShare = () => {
    console.log('share!');
    setShareView(view => !view);
  };

  useEffect(() => {
    checkBingo();
  }, [bingoBoard]);

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
              {bingoBoard.map(({ index, content, isSelected }) => (
                <li
                  key={index}
                  className={isSelected ? 'active' : ''}
                  onClick={() => handleToggleBingo(index)}
                >
                  <div>
                    {content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-4">
            <button className="bingo-share_btn" onClick={handleClickShare}>
              내 빙고 공유하기
            </button>
          </div>
        </div>
        {shareView && <BingoShare
          onClickShare={handleClickShare}
        />}
      </div>
    </div>
  );
}

export default Bingo;
