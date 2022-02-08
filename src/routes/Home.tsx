import React, { useState } from 'react';

import Banner from '../components/Banner';
import PostList from '../components/PostList';
import SelectorGroup from '../components/SelectorGroup';
import useInputArray from '../hooks/useInputArray';

function Home() {
  const pageSize = 10;

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSorting, setSelectdSorting] = useState('createdAt');
  const [
    selectedRegionTags,
    handleChangeSelectedRegionTags,
  ] = useInputArray<string>([]);
  const [
    selectedTransportationTags,
    handleChangeSelectedTransportationTags,
  ] = useInputArray<string>([]);

  console.log(selectedRegionTags, selectedTransportationTags);

  return (
    <div className="container">
      <div className="background">
        <div className="row">
          <div className="col-sm-4">
            <Banner />
          </div>
        </div>
        <SelectorGroup
          setSelectdSorting={setSelectdSorting}
          handleChangeSelectedRegionTags={handleChangeSelectedRegionTags}
          handleChangeselectedTransportationTags
            ={handleChangeSelectedTransportationTags}
        />
        <PostList />
      </div>
    </div>
  );
}

export default Home;

