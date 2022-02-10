import React from 'react';

interface TagListProps {
  type: string,
  tags: string[],
  name?: string,
  handler: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

function TagList({
  type,
  tags,
  name,
  handler,
}: TagListProps) {
  return (
    <ul className="tag-list">
      {tags.map(tag => (
        <li key={tag} className="tag-item">
          <label htmlFor={tag}>
            {tag}
          </label>
          <input
            id={tag}
            type={type}
            value={tag}
            name={name}
            onChange={handler}
          />
        </li>
      ))}
    </ul>
  );
}

export const TransportationTagList = React.memo(
  function TransportationTagList({
    type,
    tags,
    handler,
  }: TagListProps) {
    return (
      <TagList
        type={type}
        tags={tags}
        name="transportation"
        handler={handler}
      />
    );
  });

export const RegionTagList = React.memo(
  function RegionTagList({
    type,
    tags,
    handler,
  }: TagListProps) {
    return (
      <TagList
        type={type}
        tags={tags}
        name="region"
        handler={handler}
      />
    );
  }
);

export default React.memo(TagList);
