import React, { useEffect, useState } from 'react';

import { getRegionsApi,
  getTransportationsApi } from '../../apis/tags';
import MultipleChoiceTagList from './MultipleChoiceTagList';
interface MultipleChoiceTagSelectorProps {
  handleChangeselectedRegionTags: (e:any)=> void,
  handleChangeselectedTransportationTags: (e:any)=> void,
}

function MultipleChoiceTagSelector ({
  handleChangeselectedRegionTags,
  handleChangeselectedTransportationTags,
}:MultipleChoiceTagSelectorProps) {
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
      <div className="row">
        <div className="col-sm-4 taglist_first">
          <MultipleChoiceTagList
            tags={transportationTags}
            name="transportations"
            handler={handleChangeselectedTransportationTags}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <MultipleChoiceTagList
            tags={regionTags}
            name="regions"
            handler={handleChangeselectedRegionTags} />
        </div>
      </div>
    </>
  );
}

export default React.memo(MultipleChoiceTagSelector);
