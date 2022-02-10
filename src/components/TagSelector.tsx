import React, { useEffect, useState } from 'react';

import { getRegionsApi,
  getTransportationsApi } from '../apis/tags';
import { RegionTagList, TransportationTagList } from './TagList';
interface TagSelectorProps {
  type: string,
  handleChangeselectedRegions: (e:React.ChangeEvent<HTMLInputElement>)=> void,
  handleChangeselectedTransportations:
  (e:React.ChangeEvent<HTMLInputElement>)=> void,
}

function TagSelector ({
  type,
  handleChangeselectedRegions,
  handleChangeselectedTransportations,
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
    <>
      <div className="tag-selector">
        <div className="row">
          <div className="col-sm-4">
            <TransportationTagList
              type={type}
              tags={transportationTags}
              handler={handleChangeselectedTransportations}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <RegionTagList
              type={type}
              tags={regionTags}
              name="regions"
              handler={handleChangeselectedRegions} />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(TagSelector);
