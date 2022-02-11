import React from 'react';

import TagItem from './TagItem';
interface TagListProps {
    tags: string[],
    selectedTagInfo: string[]|string,
    handler: (e:any) => void
}

function TagList({
  tags,
  selectedTagInfo,
  handler,
}:TagListProps) {

  return (
    <ul className="tag-list">
      {tags.map(tag => (
        <TagItem
          key={tag}
          tag={tag}
          selectedTagInfo={selectedTagInfo}
          handler={handler}
        />
      ))}
    </ul>
  );
}

export default TagList;
