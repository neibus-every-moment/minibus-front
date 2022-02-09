import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { getReportReasonsApi } from '../apis/report';
interface ReportInputProps {
  selectedReportReason: string;
  handleChangeSelectedReportReason:
   (e:React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeDetailReason:
   (e:React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function ReportInput({
  selectedReportReason,
  handleChangeSelectedReportReason,
  handleChangeDetailReason }:ReportInputProps) {
  const [reportReasons, setReportReasons] = useState<string[]>([]);
  const isView = selectedReportReason === '기타';

  useEffect(() => {
    async function getReportReasons() {
      const data = await getReportReasonsApi();

      setReportReasons(data);
    }
    getReportReasons();
  }, []);

  return (
    <>
      {reportReasons.map(reason => (
        <div className="row" key={reason}>
          <div className="col-sm-4">
            <div className="input_group">
              <input
                type="radio"
                id={reason}
                name="reason"
                value={reason}
                onChange={handleChangeSelectedReportReason}
              />
              <label htmlFor={reason}>
                {reason}
              </label>
            </div>
          </div>
        </div>
      ))}

      <div className="row">
        <div className="col-sm-4">
          {
            isView && <textarea onChange={handleChangeDetailReason} />
          }
        </div>
      </div>
    </>
  );
}

export default React.memo(ReportInput);
