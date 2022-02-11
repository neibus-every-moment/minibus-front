import React, { useEffect, useRef, useState } from 'react';
import {
  AutoSizer, // 자동으로 아이템 크기를 조절하는 역할
  CellMeasurer, // 보이지 않는 것을 일시적으로 렌더링, 크기를 측정하는 역할
  CellMeasurerCache, // CellMeasurer에서 계산한 결과를 List와 공유하는 역할
  InfiniteLoader, // 스크롤 액션에 따라 데이터를 가져오고 캐싱하는 역할
  List, // 보이는 것만 렌더링하는 컨테이너 역할
  ListRowProps,
  WindowScroller,
} from 'react-virtualized';

import { PostProps } from '../routes/Home';
import PostItem from './PostItem';

const cache = new CellMeasurerCache({
  defaultWidth: 11,
  fixedWidth: true,
});

function Window({ posts, setCurrentPage }: {
  posts: PostProps[],
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
}) {
  const listRef = useRef<List | null>(null);

  const rowRenderer = ({ index, key, parent }: ListRowProps) => {
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        {({ measure }) => (
          <PostItem
            post={posts[index]}
            // measure={measure}
          />
        )}
      </CellMeasurer>
    );
  };

  const isLoaded = ({ index }: { index: number }) => {
    return !!posts[index];
  };

  const loadMorePosts = () => {
    setCurrentPage(page => page + 1);
  };

  return (
    <>
      <WindowScroller>
        {({ height, scrollTop, isScrolling, onChildScroll }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                ref={listRef}
                autoHeight
                height={height * 1000}
                width={width}
                isScrolling={isScrolling}
                overscanRowCount={0}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                rowCount={posts?.length}
                rowHeight={cache.rowHeight}
                rowRenderer={rowRenderer}
                deferredMeasurementCache={cache}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </>
  );
}

export default Window;
