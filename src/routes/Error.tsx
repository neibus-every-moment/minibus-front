import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="error">
          <div className="row">
            <div className="col-sm-4">
              <div className="error-message">
                <span>:(</span>
                <p>오류가 발생했습니다.<br />
              다시 시도해주세요.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="error-route">
                <Link to="/" className="link">메인으로</Link>
                <button
                  onClick={() => navigate(-1)}
                  className="link"
                >이전 페이지
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
