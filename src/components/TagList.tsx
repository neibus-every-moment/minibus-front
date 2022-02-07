import React from 'react';

import TagItem from './TagItem';

interface TagListProps {
  list: Array<string>;
  tagState: string[];
  setTagState: React.Dispatch<React.SetStateAction<string[]>>;
}

function TagList({ list, tagState, setTagState }: TagListProps) {
  console.log('TagList');
  return (<div className="tag">
    <ul className="tag_list">
      {list.map(item => (
        <TagItem
          item={item}
          key={item}
          tagState={tagState}
          setTagState={setTagState}
        />
      ))}
    </ul>
  </div>);
}

export default TagList;
