import React, { useCallback } from 'react';

interface SortingSelectorProps {
  setSortingState: React.Dispatch<React.SetStateAction<string>>;
}

function SortingSelector({ setSortingState }: SortingSelectorProps) {
  const handleChangeSortingState = useCallback((e) => {
    setSortingState(e.target.value);
  }, []);

  console.log('sortingselector');

  return (
    <div>
      <select name="Sorting" id="Sorting" onChange={handleChangeSortingState}>
        <option value="createdAt">최신순</option>
        <option value="likeCount">공감순</option>
      </select>
    </div>);

}

export default SortingSelector;
