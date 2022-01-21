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
            <time
              className='post-info-date'
              // dateTime ='2021-01-21'
            >
              created date
            </time>
          </div>
          <button className='post-report'>
            <img src="..\static\icons\icon_report.svg" alt="신고 버튼" />
          </button>
        </div>
        <div className="post-content">
          <p className='post-content-text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat hic blanditiis assumenda animi.
            Commodi accusantium, incidunt, quam sapiente vitae dolorum provident aliquam eligendi alias porro fugiat distinctio, voluptatibus ratione.
          </p>
          <ImageSwiper />
        </div>
        <div className='post-bottom'>
          <ul className='post-tag_list'>
            <li>tag1</li>
            <li>tag2</li>
            <li>tag3</li>
          </ul>
          <button className='post-like'>
            <div className='post-like-count'>
            0
            </div>
            <div className='post-like-btn'>
              <img src="..\static\icons\icon_like.svg" alt="추천 버튼" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default PostItem;
