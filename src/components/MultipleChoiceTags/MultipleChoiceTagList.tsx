import React from 'react';

interface MultipleChoiceTagListProps {
  tags: string[],
  name: string,
  handler: (e:any)=>void
}

function MultipleChoiceTagList({
  tags,
  name,
  handler,
}: MultipleChoiceTagListProps) {
  return (
    <ul>
      {tags.map(tag => (
        <li key={tag}>
          <label htmlFor="tag">
            <input
              type="checkbox"
              value={tag}
              name={name}
              onChange={handler}
            />
            {tag}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(MultipleChoiceTagList);
