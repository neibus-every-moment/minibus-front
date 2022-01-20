import React from 'react';

import ImageSwiper from './ImageSwiper';

function PostItem() {
  return (
    <>
      <div className='post-container'>
        <div className='post-top'>
          <div className='post-info'>
            <div className='post-info-emotion'>
              <img src="..\static\dummy\avatar-empty.png" alt="아바타" />
            </div>
            <div className='post-info-date'>
              created date
            </div>
          </div>
          <div className='post-report'>
            <img src="..\static\icons\icon_report.svg" alt="신고 버튼" />
          </div>
        </div>
        <div className="post-content">
          <div className='post-content-text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat hic blanditiis assumenda animi.
            Commodi accusantium, incidunt, quam sapiente vitae dolorum provident aliquam eligendi alias porro fugiat distinctio, voluptatibus ratione.
          </div>
          <ImageSwiper />
        </div>
        <div className='post-bottom'>
          <div className='post-tag_list'>
            <div>tag1</div>
            <div>tag2</div>
            <div>tag3</div>
          </div>
          <div className='post-like'>
            <div className='post-like-count'>
            0
            </div>
            <div className='post-like-btn'>
              <img src="..\static\icons\icon_like.svg" alt="추천 버튼" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItem;
