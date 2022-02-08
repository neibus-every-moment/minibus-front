import React from 'react';

import MultipleChoiceTagSelector
  from './MultipleChoiceTags/MultipleChoiceTagSelector';
import SortingSelector from './SortingSelector';
interface SelectorGroupProps {
    setSelectdSorting: React.Dispatch<React.SetStateAction<string>>;
    handleChangeSelectedRegions: (e:any) => void;
    handleChangeselectedTransportations: (e:any)=>void;
}

function SelectorGroup ({
  setSelectdSorting,
  handleChangeSelectedRegions,
  handleChangeselectedTransportations,
}:SelectorGroupProps) {
  return (
    <>
      <MultipleChoiceTagSelector
        handleChangeselectedRegions={handleChangeSelectedRegions}
        handleChangeselectedTransportations
          ={handleChangeselectedTransportations}
      />
      <div className="row">
        <div className="col-sm-4">
          <SortingSelector
            setSelectdSorting={setSelectdSorting}
          />
        </div>
      </div>
    </>
  );
}

export default React.memo(SelectorGroup);
