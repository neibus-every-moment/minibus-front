import React from 'react';

interface SingleChoiceTagListProps {
    tags: string[],
    name: string,
    handler: (e:any)=>void
}

function SingleChoiceTagList ({
  tags,
  name,
  handler,
}:SingleChoiceTagListProps) {
  return (
    <>
      {
        tags.map(
          tag => (<li key={tag}>
            <label>
              <input
                type="radio"
                name={name}
                value={tag}
                onChange={handler}
              />
              {tag}
            </label>
          </li>
          )
        )
      }
    </>
  );
}

export default React.memo(SingleChoiceTagList);
