import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { getReportReasonsApi } from '../apis/report';
interface ReportInputProps {
    combindedSelectedReason: string;
    handleChangeCombindedSelectedReason: (e:any) => void;
    handleChangeDetailReason: (e:any) => void;
}
interface ReportReasons {
    id: number;
    reportReason: string;
}

function ReportInput({
  combindedSelectedReason,
  handleChangeCombindedSelectedReason,
  handleChangeDetailReason }:ReportInputProps) {
  const [reportReasons, setReportReasons] = useState<ReportReasons[]>([]);
  const isView = combindedSelectedReason.split(',')[1] === '기타';

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
        <div className="row" key={reason.id}>
          <div className="col-sm-4">
            <div className="input_group">
              <input
                type="radio"
                id={reason.reportReason}
                name="reason"
                value={`${reason.id},${reason.reportReason}`}
                onChange={handleChangeCombindedSelectedReason}
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
            isView && <textarea onChange={handleChangeDetailReason} />
          }
        </div>
      </div>
    </>
  );
}

export default React.memo(ReportInput);
