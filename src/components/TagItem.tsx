import React, { useCallback, useState } from 'react';

interface TagListProps {
  item: string;
  tagState: string[];
  setTagState:React.Dispatch<React.SetStateAction<string[]>>;
}

function TagItem({ item, tagState, setTagState }:TagListProps) {
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
      setTagState([...tagState, item]);
    } else {
      setTagState([...tagState.filter(tag => tag !== item)]);
    }
  }, [isActive, tagState, setTagState]);

  const classGroup = `tag_item${ isActive}`;

  return <li
    className={classGroup}
    onClick={() => {
      handleChangeTagState();
      handleToggleIsActive();
    }}>{item}</li>;
}

export default React.memo(TagItem);

