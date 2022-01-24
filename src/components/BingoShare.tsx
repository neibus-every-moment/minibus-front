import React, { MouseEventHandler } from 'react';

interface ShareProps {
  onClickShare: MouseEventHandler<HTMLButtonElement>
}

function BingoShare({ onClickShare }: ShareProps) {
  return (
    <div className="bingo-share">
      <div className="container">
        <div className="row">
          <header className="col-sm-4 bingo-share-header">
            <h2>내 빙고 공유하기</h2>
            <button onClick={onClickShare}>
              <img src="/static/icons/cancel-black.svg" alt="공유 취소" />
            </button>
          </header>
        </div>

      </div>
    </div>
  );
}

export default BingoShare;
