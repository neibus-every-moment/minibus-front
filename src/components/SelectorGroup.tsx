import React from 'react';

import SortingSelector from './SortingSelector';
import TagSelector from './TagSelector';

interface SelectorGroupProps {
    selectedRegion: string[];
    selectedTransportation: string[];
    setSelectdSorting: React.Dispatch<React.SetStateAction<string>>;
    setSelectedRegion: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedTransportation: React.Dispatch<React.SetStateAction<string[]>>;
}

function SelectorGroup ({
  selectedRegion,
  selectedTransportation,
  setSelectdSorting,
  setSelectedRegion,
  setSelectedTransportation,
}:SelectorGroupProps) {
  console.log('selectorGroup');

  return (
    <>
      <TagSelector
        selectedRegion={selectedRegion}
        selectedTransportation={selectedTransportation}
        setSelectedRegion={setSelectedRegion}
        setSelectedTransportation={setSelectedTransportation}
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

export default SelectorGroup;
