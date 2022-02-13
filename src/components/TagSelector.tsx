import React, { useEffect, useState } from 'react';

import { getRegionsApi,
  getTransportationsApi } from '../apis/tags';
import TagList from './TagList';

interface TagSelectorProps {
    handleChangeSelectedRegionInfo: (e:any) => void;
    handleChangeSelectedTransportationInfo: (e:any) => void;
    selectedTransportationInfo:string[]|string;
    selectedRegionInfo:string[]|string;
}


function TagSelector ({
  handleChangeSelectedRegionInfo,
  handleChangeSelectedTransportationInfo,
  selectedTransportationInfo,
  selectedRegionInfo,
}:TagSelectorProps) {
  const [transportationTags, setTransportationTags] = useState<string[]>([]);
  const [regionTags, setRegionTags] = useState<string[]>([]);

  useEffect(() => {
    async function getTransportations () {
      const tags = await getTransportationsApi();

      if (tags) {
        setTransportationTags(tags);
      }
    }
    getTransportations();
  }, []);

  useEffect(() => {
    async function getRegions () {
      const tags = await getRegionsApi();

      if (tags) {
        setRegionTags(tags);
      }
    }
    getRegions();
  }, []);

  return (
    <div className="tag-selector">
      <div className="row">
        <div className="col-sm-4">
          <TagList
            tags={transportationTags}
            selectedTagInfo={selectedTransportationInfo}
            handler={handleChangeSelectedTransportationInfo}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <TagList
            tags={regionTags}
            selectedTagInfo={selectedRegionInfo}
            handler={handleChangeSelectedRegionInfo} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(TagSelector);
