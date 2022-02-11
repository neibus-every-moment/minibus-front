import React from 'react';

import SortingSelector from './SortingSelector';
import TagSelector from './TagSelector';
interface SelectorGroupProps {
  selectedRegions:string[];
  selectedTransportations:string[];
  setSelectdSorting: React.Dispatch<React.SetStateAction<string>>;
  handleChangeSelectedRegions: (e:any) => void;
  handleChangeSelectedTransportations: (e:any)=>void;
}

function SelectorGroup ({
  selectedRegions,
  selectedTransportations,
  setSelectdSorting,
  handleChangeSelectedRegions,
  handleChangeSelectedTransportations,
}:SelectorGroupProps) {
  return (
    <>
      <div className="selector-group">
        <TagSelector
          selectedTransportationInfo={selectedTransportations}
          selectedRegionInfo={selectedRegions}
          handleChangeSelectedRegionInfo={handleChangeSelectedRegions}
          handleChangeSelectedTransportationInfo
            ={handleChangeSelectedTransportations}
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
