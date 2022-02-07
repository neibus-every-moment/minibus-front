import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface selectedReason {
    reason: string;
    detailReason: string;
}

interface reportInputProps {
    setSelectedReason: React.Dispatch<React.SetStateAction<selectedReason>>;
}

interface reportReasons {
    id: number;
    reportReason: string;
}

function ReportInput({
  setSelectedReason }:reportInputProps) {
  const [reportReasons, setReportReasons] = useState<reportReasons[]>([]);
  const [viewDetailReason, setViewDetailReason] = useState(false);

  useEffect(() => {
    async function getReportReasons() {
      const { data: { data } }
            = await axios.get('http://3.37.182.59:8080/api/reasons');

      console.log(data);
      setReportReasons(data);
    }

    getReportReasons();
  }, []);

  const handleChangeRadio = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '기타') {
      setViewDetailReason(true);
    } else {
      setViewDetailReason(false);
      setSelectedReason(prev => ({ ...prev, detailReason: '' }));
    }

    setSelectedReason(prev => ({ ...prev, reason: e.target.value }));
  };

  const handleDetailReason = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedReason(prev => ({ ...prev, detailReason: e.target.value }));
  };

  return (
    <>
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
    </>
  );
}

export default React.memo(ReportInput);
