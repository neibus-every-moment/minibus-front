import React from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from '../hooks/useInput';
import SingleChoiceTagSeletor from './SingleChoiceTag/SingleChoiceTagSeletor';

function PostCreate() {
  const [
    selectedTransportationTag,
    handleChangeselectedTransportationTag,
  ] = useInput('');
  const [selectedRegionTag, handleChangeselectedRegionTag] = useInput('');

  const navigate = useNavigate();

  return (
    <div className="post_create-container">
      <header className="post_create-top">
        <button
          className="post_create-back"
          onClick={() => navigate('/')}
        >
          <img src="../static/icons/arrow-left.svg" alt="" />
        </button>
        <div>의견</div>
        <button className="post_create-submit">남기기</button>
      </header>
      <main>
        <section className="post_create-write">
          <textarea name="" id="" placeholder="본문에 이모티콘을 이용해 감정을 표현할 수 있어요." />
          <form action="">
            <label htmlFor="attatchment">
              <img src="../static/icons/icon_image.svg" alt="사진 첨부" />
            </label>
            <input
              type="file"
              id="attatchment"
              accept="image/*"
              multiple
              className="post_create-write-attatchment"
            />
            <SingleChoiceTagSeletor
              handleChangeselectedTransportationTag
                ={handleChangeselectedTransportationTag}
              handleChangeselectedRegionTag={handleChangeselectedRegionTag} />
          </form>
        </section>
      </main>
    </div>
  );
}

export default PostCreate;
