import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Report () {
  const navigate = useNavigate();
  const [reportReasons, setReportReasons] = useState(
    [
      '욕설이나 비속어',
      '스팸메시지나 광고성 메시지',
      '가학적이거나 혐오적인 콘텐츠',
      '민감하거나 선정적인 컨텐츠',
      '기타',
    ]);
  const [viewDetailReason, setViewDetailReason] = useState(false);
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

  const handleDetailReason = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedReason(prev => ({ ...prev, detailReason: e.target.value }));
  };

  const handleChangeRadio = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '기타') {
      setViewDetailReason(true);
    } else {
      setViewDetailReason(false);
      setSelectedReason(prev => ({ ...prev, detailReason: '' }));
    }

    setSelectedReason(prev => ({ ...prev, reason: e.target.value }));
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
                  disabled={!selectedReason.reason ||
                    (selectedReason.reason === '기타' &&
                    !selectedReason.detailReason)}
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
