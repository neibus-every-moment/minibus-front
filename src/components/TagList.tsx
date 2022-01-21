import React from 'react';

import TagItem from './TagItem';

interface TagListProps {
  list: Array<string>;
}

function TagList({ list }:TagListProps) {
  return (<div className='tag'>
    <ul className="tag_list">{list.map(el => (<TagItem item={el} key={el}/>))}</ul>
  </div>);
}

export default TagList;
