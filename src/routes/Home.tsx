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
    selectedRegions,
    handleChangeSelectedRegions,
  ] = useInputArray<string>([]);
  const [
    selectedTransportations,
    handleChangeSelectedTransportations,
  ] = useInputArray<string>([]);

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
          handleChangeSelectedRegions={handleChangeSelectedRegions}
          handleChangeselectedTransportations
            ={handleChangeSelectedTransportations}
        />
        <PostList />
      </div>
    </div>
  );
}

export default Home;

