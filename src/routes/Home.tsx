import React, { useEffect, useState } from 'react';

import { getPosts } from '../apis/post';
import Banner from '../components/Banner';
import PostList from '../components/PostList';
import SelectorGroup from '../components/SelectorGroup';

export interface ImageProps {
  id: number,
  url: string
}

interface CommentProps {
  id: number,
  user: {
      id: number,
      avatar: string,
      nickname: string
  },
  text: string,
  createdAt: Date,
  updatedAt: Date
}

export interface CommentsProps {
  count: number,
  contents: CommentProps[] | []
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
    contents: CommentProps[] | [],
  },
}

function Home() {
  const pageSize = 10;

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSorting, setSelectdSorting] = useState('createdAt');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [
    selectedTransportations,
    setSelectedTransportations,
  ] = useState<string[]>([]);
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    (async () => {
      const newPosts = await getPosts({
        start: currentPage,
        size: pageSize,
        sorting: selectedSorting,
        regions: selectedRegions,
        transportations: selectedTransportations,
      });

      setPosts(newPosts);
    })();
  }, [
    currentPage,
    selectedSorting,
    selectedRegions,
    selectedTransportations,
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
          selectedRegions={selectedRegions}
          selectedTransportations={selectedTransportations}
          setSelectdSorting={setSelectdSorting}
          setSelectedRegions={setSelectedRegions}
          setSelectedTransportations={setSelectedTransportations}
        />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default Home;

