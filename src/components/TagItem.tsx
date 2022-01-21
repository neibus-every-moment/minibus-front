import React, { useState } from 'react';

interface TagListProps {
  item: string;
}

function TagItem({ item }:TagListProps) {
  const [isActive, setIsActive] = useState('');

  const onToggleTagItem = () => {
    if (isActive === '') {
      setIsActive(' active');
    } else {
      setIsActive('');
    }
  };

  const classGroup = `tag_item${ isActive}`;

  return <li className={classGroup} onClick={onToggleTagItem}>{item}</li>;
}

export default TagItem;

