import React, { useCallback } from 'react';

interface SortingSelectorProps {
  setSelectdSorting: React.Dispatch<React.SetStateAction<string>>;
}

function SortingSelector({ setSelectdSorting }: SortingSelectorProps) {
  const handleChangeSortingState
    = useCallback((e:React.ChangeEvent<HTMLSelectElement>) => {
      setSelectdSorting(e.target.value);
    }, []);

  return (
    <div className="sorting-selector">
      <select name="Sorting" id="Sorting" onChange={handleChangeSortingState}>
        <option value="createdAt">최신순</option>
        <option value="likeCount">공감순</option>
      </select>
    </div>
  );
}

export default React.memo(SortingSelector);
