import React, { useEffect, useState } from 'react';

interface TagItemProps {
    tag: string,
    selectedTagInfo: string[]|string,
    handler: (e:any) => void
}

function TagItem ({
  tag,
  selectedTagInfo,
  handler,
}:TagItemProps) {
  const [className, setCalssName] = useState('tag-item');
  useEffect(() => {
    if (selectedTagInfo.includes(tag)) {
      setCalssName('tag-item isActive');
    } else {
      setCalssName('tag-item');
    }
  }, [className, selectedTagInfo]);

  return (
    <li
      className={className}
      onClick={handler}
      id={tag}>
      {tag}
    </li>
  );
}

export default React.memo(TagItem);
