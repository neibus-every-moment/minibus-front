import React, { useEffect, useState } from 'react';

import {
  getRegionTagArray,
  getTransportationTagArray,
} from '../apis/tags';
import TagList from './TagList';

interface TagSelectorProps {
  selectedRegions: string[];
  selectedTransportations: string[];
  setSelectedRegions:React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedTransportations: React.Dispatch<React.SetStateAction<string[]>>;
}

function TagSelector ({
  selectedRegions,
  selectedTransportations,
  setSelectedRegions,
  setSelectedTransportations,
}:TagSelectorProps) {
  const [transportationTags, setTransportationTags] = useState<string[]>([]);
  const [regionTags, setRegionTags] = useState<string[]>([]);

  useEffect(() => {
    async function getTransportations () {
      const tags = await getTransportationTagArray();

      if (tags) {
        setTransportationTags(tags);
      }
    }
    getTransportations();
  }, []);

  useEffect(() => {
    async function getRegions () {
      const tags = await getRegionTagArray();

      if (tags) {
        setRegionTags(tags);
      }
    }
    getRegions();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-sm-4 taglist_first">
          <TagList
            list={transportationTags}
            tagsState={selectedTransportations}
            setTagsState={setSelectedTransportations}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <TagList
            list={regionTags}
            tagsState={selectedRegions}
            setTagsState={setSelectedRegions} />
        </div>
      </div>
    </>
  );
}

export default React.memo(TagSelector);
