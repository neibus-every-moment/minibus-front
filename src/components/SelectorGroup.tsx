import React from 'react';

import SortingSelector from './SortingSelector';
import TagSelector from './TagSelector';

interface SelectorGroupProps {
    regionState: string[];
    transportationState: string[];
    setSortingState: React.Dispatch<React.SetStateAction<string>>;
    setRegionState: React.Dispatch<React.SetStateAction<string[]>>;
    setTransportationState: React.Dispatch<React.SetStateAction<string[]>>;
}

function SelectorGroup ({
  regionState,
  transportationState,
  setSortingState,
  setRegionState,
  setTransportationState,
}:SelectorGroupProps) {
  console.log('selectorGroup');

  return (
    <>
      <TagSelector
        regionState={regionState}
        transportationState={transportationState}
        setRegionState={setRegionState}
        setTransportationState={setTransportationState}
      />
      <div className="row">
        <div className="col-sm-4">
          <SortingSelector
            setSortingState={setSortingState}
          />
        </div>
      </div>
    </>

  );
}

export default SelectorGroup;
