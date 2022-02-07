import React from 'react';

import SortingSelector from './SortingSelector';
import TagSelector from './TagSelector';

interface SelectorGroupProps {
    selectedRegions: string[];
    selectedTransportations: string[];
    setSelectdSorting: React.Dispatch<React.SetStateAction<string>>;
    setSelectedRegions: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedTransportations: React.Dispatch<React.SetStateAction<string[]>>;
}

function SelectorGroup ({
  selectedRegions,
  selectedTransportations,
  setSelectdSorting,
  setSelectedRegions,
  setSelectedTransportations,
}:SelectorGroupProps) {
  return (
    <>
      <TagSelector
        selectedRegions={selectedRegions}
        selectedTransportations={selectedTransportations}
        setSelectedRegions={setSelectedRegions}
        setSelectedTransportations={setSelectedTransportations}
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
