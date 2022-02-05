import React, { useEffect, useState } from 'react';

import { getRegionNameArray,
  getTransportationNameArray } from '../apis/getTags';
import TagList from './TagList';

interface TagSelectorProps {
  regionState: string[];
  transportationState: string[];
  setRegionState:React.Dispatch<React.SetStateAction<string[]>>;
  setTransportationState: React.Dispatch<React.SetStateAction<string[]>>;
}

function TagSelector ({
  regionState,
  transportationState,
  setRegionState,
  setTransportationState,
}:TagSelectorProps) {
  const [transportationTags, setTransportationTags] = useState(['']);
  const [regionTags, setRegionTags] = useState(['']);

  useEffect(() => {
    async function getTransportations () {
      const tags = await getTransportationNameArray();

      if (tags) {
        setTransportationTags(tags);
      }
    }
    getTransportations();
  }, []);

  useEffect(() => {
    async function getRegions () {
      const tags = await getRegionNameArray();

      if (tags) {
        setRegionTags(tags);
      }
    }
    getRegions();
  }, []);

  console.log('TagSelector');

  return (
    <>
      <div className="row">
        <div className="col-sm-4 taglist_first">
          <TagList
            list={transportationTags}
            tagState={transportationState}
            setTagState={setTransportationState}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <TagList
            list={regionTags}
            tagState={regionState}
            setTagState={setRegionState} />
        </div>
      </div>
    </>
  );
}

export default TagSelector;
