import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import ReportInput from '../components/ReportInput';

function Report () {
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason]
    = useState({ reason: '', detailReason: '' });

  const handleSubmitReport = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { reason, detailReason } = selectedReason;

    if (reason || detailReason) {
      console.log(reason, detailReason);
      alert('신고가 접수되었습니다');
      navigate(-1);
    }
  };


  return (
    <section className="report">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <header className="report_header">
              <h2>신고하기</h2>
              <button onClick={() => { navigate(-1); }}>
                <img src="/static/icons/cancel-black.svg" alt="신고창 닫기" />
              </button>
            </header>
          </div>
        </div>

        <div className="report_body">
          <form onSubmit={handleSubmitReport}>
            <ReportInput setSelectedReason={setSelectedReason} />
            <div className="row">
              <div className="col-sm-4">
                <button
                  type="submit"
                  className="submit_btn"
                  disabled={!selectedReason.reason ||
                    (selectedReason.reason === '기타' &&
                    !selectedReason.detailReason)}
                >
                  신고하기
                </button>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-sm-4">
              <p>
                *신고사유에 대한 해당 여부 검토 후 처리되며 허위 신고인 경우 서비스 이용에 제한 될수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Report;
