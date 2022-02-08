import React, { useEffect, useState } from 'react';

import {
  getRegionTagArray,
  getTransportationTagArray } from '../../apis/tags';
import SingleChoiceTagList from './SingleChoiceTagList';

interface SingleChoiceTagSeletorProps {
  handleChangeselectedRegionTag: (e:any)=> void,
  handleChangeselectedTransportationTag: (e:any)=> void,
}

function SingleChoiceTagSeletor({
  handleChangeselectedRegionTag,
  handleChangeselectedTransportationTag,
}:SingleChoiceTagSeletorProps) {
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
      <ul>
        <SingleChoiceTagList
          tags={transportationTags}
          name="transportation"
          handler={handleChangeselectedTransportationTag}
        />
      </ul>

      <ul>
        <SingleChoiceTagList
          tags={regionTags}
          name="region"
          handler={handleChangeselectedRegionTag}
        />
      </ul>
    </>
  );
}

export default React.memo(SingleChoiceTagSeletor);