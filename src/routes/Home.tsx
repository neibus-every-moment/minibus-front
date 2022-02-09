import React, { useState } from 'react';
import useSWR from 'swr';

import Banner from '../components/Banner';
import PostList from '../components/PostList';
import SelectorGroup from '../components/SelectorGroup';
import useInputArray from '../hooks/useInputArray';
import { fetcherWithParams } from '../utils/fetcher';
export interface ImageProps {
  id: number,
  url: string
}

export interface CommentProps {
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
  like: {
    count: number,
    users: number[]
  },
  comments: {
    count: number,
    contents: CommentProps[] | [],
  },
}

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

  const { data } = useSWR(
    [
      'http://3.37.182.59:8080/api/posts/', {
        start: currentPage,
        size: pageSize,
        sorting: selectedSorting,
        regions: selectedRegions,
        transportations: selectedTransportations,
      },
    ],
    fetcherWithParams,
    { refreshInterval: 2000 },
  );

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
        <PostList posts={data} />
      </div>
    </div>
  );
}

export default Home;

