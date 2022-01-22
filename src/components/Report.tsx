import React, { MouseEventHandler, useState } from 'react';

interface ReportProps {
  handleReportView: MouseEventHandler<HTMLButtonElement>;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
}

function Report ({ handleReportView, setView }:ReportProps) {
  const [reportReasons, setReportReasons] = useState(
    [
      '욕설이나 비속어',
      '스팸메시지나 광고성 메시지',
      '가학적이거나 혐오적인 콘텐츠',
      '민감하거나 선정적인 컨텐츠',
      '기타',
    ]);
  const [viewDetailReason, setViewDetailReason] = useState(false);
  const [submitReason, setSubmitReason] = useState('');
  const [submitDetailReason, setSubmitDetailReason] = useState('');

  const handleSubmitReport = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitReason || submitDetailReason) {
      console.log(submitReason, submitDetailReason);
      setView(false);
      alert('신고가 접수되었습니다');
    }
  };

  const handleDetailReason = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubmitDetailReason(e.target.value);
  };

  const handleChangeRadio = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '기타') {
      setViewDetailReason(true);
    } else {
      setViewDetailReason(false);
    }

    setSubmitReason(e.target.value);
  };


  return (
    <section className="report">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <header className="report_header">
              <h2>신고하기</h2>
              <button onClick={handleReportView}>
                <img src="/static/icons/cancel-black.svg" alt="신고창 닫기" />
              </button>
            </header>
          </div>
        </div>

        <div className="report_body">
          <form onSubmit={handleSubmitReport}>
            {reportReasons.map(reason => (
              <div className="row" key={reason}>
                <div className="col-sm-4">
                  <div className="input_group">
                    <input
                      type="radio"
                      id={reason}
                      name="reason"
                      value={reason}
                      onChange={handleChangeRadio}
                    />
                    <label htmlFor={reason}>{reason}</label>
                  </div>
                </div>
              </div>
            ))}

            <div className="row">
              <div className="col-sm-4">
                {
                  viewDetailReason
              && <textarea onChange={handleDetailReason} />
                }
              </div>
            </div>


            <div className="row">
              <div className="col-sm-4">
                <button
                  type="submit"
                  className="submit_btn"
                  disabled={!submitReason ||
                    (submitReason === '기타' && !submitDetailReason)}
                >
                  신고하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

  );
}

export default Report;
