import React, { useCallback, useState } from 'react';

interface TagItemProps {
  item: string;
  tagsState: string[];
  setTagsState:React.Dispatch<React.SetStateAction<string[]>>;
}

function TagItem({ item, tagsState, setTagsState }:TagItemProps) {
  const [isActive, setIsActive] = useState('');

  const handleToggleIsActive = useCallback(() => {
    if (isActive === '') {
      setIsActive(' active');
    } else {
      setIsActive('');
    }
  }, [isActive]);

  const handleChangeTagState = useCallback(() => {
    if (isActive === '') {
      setTagsState([...tagsState, item]);
    } else {
      setTagsState([...tagsState.filter(tag => tag !== item)]);
    }
  }, [isActive, tagsState, setTagsState]);

  const classGroup = `tag_item${ isActive}`;

  return <li
    className={classGroup}
    onClick={() => {
      handleChangeTagState();
      handleToggleIsActive();
    }}>{item}</li>;
}

export default React.memo(TagItem);

