import React, { useState } from 'react';

import Banner from '../components/Banner';
import PostList from '../components/PostList';
import SelectorGroup from '../components/SelectorGroup';

function Home() {
  const pageSize = 10;

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSorting, setSelectdSorting] = useState('createdAt');
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const [
    selectedTransportation,
    setSelectedTransportation,
  ] = useState<string[]>([]);

  return (
    <div className="container">
      <div className="background">
        <div className="row">
          <div className="col-sm-4">
            <Banner />
          </div>
        </div>
        <SelectorGroup
          selectedRegion={selectedRegion}
          selectedTransportation={selectedTransportation}
          setSelectdSorting={setSelectdSorting}
          setSelectedRegion={setSelectedRegion}
          setSelectedTransportation={setSelectedTransportation}
        />
        <PostList />
      </div>
    </div>
  );
}

export default Home;

