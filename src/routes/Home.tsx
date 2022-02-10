import React, { useRef, useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { baseUrl } from '../apis/baseUrl';
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
  const scrollRef = useRef(null);

  const getKey =
  (pageNumber: number, previousPageData: PostProps[]) => {
    if (previousPageData && !previousPageData.length) {
      return null;
    } // 끝에 도달

    return [
      `${baseUrl}/posts`, {
        start: pageNumber,
        size: pageSize,
        sorting: selectedSorting,
        regions: selectedRegions?.join(','),
        transportations: selectedTransportations?.join(','),
      },
    ]; // SWR 키
  };

  const {
    data,
    isValidating, // 요청이나 갱신 로딩의 여부
    size,
    setSize,
  } = useSWRInfinite(
    getKey,
    fetcherWithParams,
    // { refreshInterval: 2000 },
  );

  if (!data) { return (<div>loading</div>); }

  const datas = data ? [].concat(...data) : [];

  console.log(datas);

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
        <button onClick={() => setSize(size + 1)}>더불러오기</button>
        <div ref={scrollRef}>
          <PostList
            posts={datas}
            setCurrentPage={setSize}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

