import React from 'react';

import { ImageProps } from '../routes/Home';
import ImageSwiper from './ImageSwiper';

interface PostContentProps {
  text: string,
  images: ImageProps[]
}

function PostContent({ text, images }: PostContentProps) {
  return (
    <div>
      <div className="post-content">
        <p className="post-content-text">
          {text}
        </p>
        <ImageSwiper images={images} />
      </div>
    </div>
  );
}

export default React.memo(PostContent);
