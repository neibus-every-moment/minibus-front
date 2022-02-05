import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
  const [transportationTags, setTransportationTags] = useState([]);
  const [regionTags, setRegionTags] = useState([]);

  useEffect(() => {
    async function getTransportations () {
      const { data: { data } }
            = await axios.get('http://3.37.182.59:8080/api/transportations');

      setTransportationTags(data.map(
        (transportation: { name: string; }) => transportation.name));
    }
    getTransportations();
  }, []);

  useEffect(() => {
    async function getRegions () {
      const { data: { data } } =
            await axios.get('http://3.37.182.59:8080/api/regions');
      setRegionTags(data.map((region: { name: string; }) => region.name));
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
