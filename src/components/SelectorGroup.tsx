import React from 'react';

import MultipleChoiceTagSelector
  from './MultipleChoiceTags/MultipleChoiceTagSelector';
import SortingSelector from './SortingSelector';

interface SelectorGroupProps {
    setSelectdSorting: React.Dispatch<React.SetStateAction<string>>;
    handleChangeSelectedRegionTags: (e:any) => void;
    handleChangeselectedTransportationTags: (e:any)=>void;
}

function SelectorGroup ({
  setSelectdSorting,
  handleChangeSelectedRegionTags,
  handleChangeselectedTransportationTags,
}:SelectorGroupProps) {
  return (
    <>
      <MultipleChoiceTagSelector
        handleChangeselectedRegionTags={handleChangeSelectedRegionTags}
        handleChangeselectedTransportationTags
          ={handleChangeselectedTransportationTags}
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
