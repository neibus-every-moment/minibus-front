import React from 'react';

import TagItem from './TagItem';

interface TagListProps {
  list: Array<string>;
  tagsState: string[];
  setTagsState: React.Dispatch<React.SetStateAction<string[]>>;
}

function TagList({ list, tagsState, setTagsState }: TagListProps) {
  return (<div className="tag">
    <ul className="tag_list">
      {list.map(item => (
        <TagItem
          item={item}
          key={item}
          tagsState={tagsState}
          setTagsState={setTagsState}
        />
      ))}
    </ul>
  </div>);
}

export default React.memo(TagList);
