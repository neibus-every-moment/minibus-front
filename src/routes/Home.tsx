import React, { useEffect, useState } from 'react';

import { getPosts } from '../apis/post';
import Banner from '../components/Banner';
import PostList from '../components/PostList';
import SelectorGroup from '../components/SelectorGroup';

export interface ImageProps {
  id: number,
  url: string
}

export interface PostProps {
  id: number,
  user: {
    id: number,
    email: string,
    avatar: string,
    nickname: string,
  },
  createdAt: Date,
  updatedAt: Date,
  transportation: string,
  region: string,
  text: string,
  images: ImageProps[] | [],
  likeCount: number,
  comments: {
    count: number,
    contents: string[] | [],
  },
}

function Home() {
  const pageSize = 10;

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSorting, setSelectdSorting] = useState('createdAt');
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const [
    selectedTransportation,
    setSelectedTransportation,
  ] = useState<string[]>([]);
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    (async () => {
      const newPosts = await getPosts({
        start: currentPage,
        size: pageSize,
        sorting: selectedSorting,
        regions: selectedRegion,
        transportations: selectedTransportation,
      });

      setPosts(newPosts);
    })();
  }, [
    currentPage,
    selectedSorting,
    selectedRegion,
    selectedTransportation,
  ]);

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
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default Home;

