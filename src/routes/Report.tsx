import React from 'react';
import { useNavigate } from 'react-router';

import { postReportApi } from '../apis/report';
import ReportInput from '../components/ReportInput';
import useInput from '../hooks/useInput';
import { getParamId } from '../utils/location';

function Report () {
  const postId = getParamId();
  const navigate = useNavigate();
  const [
    selectedReportReason,
    handleChangeSelectedReportReason,
  ] = useInput('');
  const [detailReason, handleChangeDetailReason] = useInput('');

  const handleSubmitReport = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedReportReason !== '기타') {
      postReportApi({
        postId: parseInt(postId),
        reportReason: selectedReportReason,
      });
    }

    if (selectedReportReason === '기타' && detailReason) {
      postReportApi({
        postId: parseInt(postId),
        reportReason: selectedReportReason,
        detail: detailReason,
      });
    }

    navigate(-1);
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
            <ReportInput
              selectedReportReason={selectedReportReason}
              handleChangeSelectedReportReason=
                {handleChangeSelectedReportReason}
              handleChangeDetailReason={handleChangeDetailReason}
            />
            <div className="row">
              <div className="col-sm-4">
                <button
                  type="submit"
                  className="submit_btn"
                  disabled=
                    {
                      !selectedReportReason ||
                    (selectedReportReason === '기타' && !detailReason)
                    }
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
