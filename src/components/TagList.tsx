import React from 'react';

import TagItem from './TagItem';

interface TagListProps {
  list: Array<string>;
}

function TagList({ list }: TagListProps) {
  return (<div className='tag'>
    <ul className="tag_list first">
      {list.map(el => (
        /*
        TODO: 그냥 임시로 만든 거라 키값을 대충 두신 거 같기는 한데,
        Home에서 에러 메시지가 너무 많이 떠서 디버깅이 번거로워 임시방편으로
        키값을 난수로 대체했습니다.
        */
        <TagItem item={el} key={Math.random()}/>
      ))}
    </ul>
  </div>);
}

export default TagList;
