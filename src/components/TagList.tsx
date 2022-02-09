import React from 'react';

interface TagListProps {
  type: string,
  tags: string[],
  name: string,
  handler: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

function TagList({
  type,
  tags,
  name,
  handler,
}: TagListProps) {
  return (
    <ul>
      {tags.map(tag => (
        <li key={tag}>
          <label htmlFor="tag">
            <input
              type={type}
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

export default React.memo(TagList);
