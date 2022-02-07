import React, { useEffect, useState } from 'react';

import { getRegionNameArray,
  getTransportationNameArray } from '../apis/tags';
import TagList from './TagList';

interface TagSelectorProps {
  selectedRegion: string[];
  selectedTransportation: string[];
  setSelectedRegion:React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedTransportation: React.Dispatch<React.SetStateAction<string[]>>;
}

function TagSelector ({
  selectedRegion,
  selectedTransportation,
  setSelectedRegion,
  setSelectedTransportation,
}:TagSelectorProps) {
  const [transportationTags, setTransportationTags] = useState<string[]>([]);
  const [regionTags, setRegionTags] = useState<string[]>([]);

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
            tagState={selectedTransportation}
            setTagState={setSelectedTransportation}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <TagList
            list={regionTags}
            tagState={selectedRegion}
            setTagState={setSelectedRegion} />
        </div>
      </div>
    </>
  );
}

export default TagSelector;
