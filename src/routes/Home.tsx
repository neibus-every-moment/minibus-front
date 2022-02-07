import React, { useState } from 'react';

import Banner from '../components/Banner';
import PostList from '../components/PostList';
import SelectorGroup from '../components/SelectorGroup';

function Home() {
  const pageSize = 10;

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSorting, setSelectdSorting] = useState('createdAt');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [
    selectedTransportations,
    setSelectedTransportations,
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
          selectedRegions={selectedRegions}
          selectedTransportations={selectedTransportations}
          setSelectdSorting={setSelectdSorting}
          setSelectedRegions={setSelectedRegions}
          setSelectedTransportations={setSelectedTransportations}
        />
        <PostList />
      </div>
    </div>
  );
}

export default Home;

