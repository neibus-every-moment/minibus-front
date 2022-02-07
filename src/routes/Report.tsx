import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

interface reportReasonProps {
  id: number;
  reportReason: string;
}

function Report () {
  const navigate = useNavigate();
  const [reportReasons, setReportReasons] = useState<reportReasonProps[]>([]);
  const [viewDetailReason, setViewDetailReason] = useState(false);
  const [selectedReason, setSelectedReason]
    = useState({ reason: '', detailReason: '' });


  useEffect(() => {
    async function getReportReasons() {
      const { data: { data } }
        = await axios.get('http://3.37.182.59:8080/api/reasons');

      console.log(data);
      setReportReasons(data);
    }

    getReportReasons();
  }, []);

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
              <div className="row" key={reason.id}>
                <div className="col-sm-4">
                  <div className="input_group">
                    <input
                      type="radio"
                      id={reason.reportReason}
                      name="reason"
                      value={reason.reportReason}
                      onChange={handleChangeRadio}
                    />
                    <label htmlFor={reason.reportReason}>
                      {reason.reportReason}
                    </label>
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
