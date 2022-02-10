import React from 'react';

import SortingSelector from './SortingSelector';
import TagSelector from './TagSelector';
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
      <div className="selector-group">
        <TagSelector
          type="checkbox"
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
      </div>
    </>
  );
}

export default React.memo(SelectorGroup);
