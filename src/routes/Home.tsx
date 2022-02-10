import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
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
  const pageSize = 5;
  const [endPointRef, isInView] = useInView();
  const [selectedSorting, setSelectdSorting] = useState('createdAt');
  const [
    selectedRegions,
    handleChangeSelectedRegions,
  ] = useInputArray<string>([]);
  const [
    selectedTransportations,
    handleChangeSelectedTransportations,
  ] = useInputArray<string>([]);

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
    { refreshInterval: 60000 },
  );

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (isInView && !isValidating) {
      setSize(prevState => prevState + 1);
    }
  }, [isInView, isValidating]);

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
        {
          isValidating
            ? <div style={{
              position: 'fixed',
              top: 200,
              right: 100,
              color: 'red',
            }}
            >
              LOADING
            </div>
            : null
        }
        <PostList posts={datas} />
        <div ref={endPointRef}>
          loading...
        </div>
      </div>
    </div>
  );
}

export default Home;

