import React from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from '../hooks/useInput';
import TagSelector from './TagSelector';

function PostCreate() {
  const [
    selectedTransportation,
    handleChangeselectedTransportation,
  ] = useInput('');
  const [selectedRegion, handleChangeselectedRegion] = useInput('');

  const navigate = useNavigate();

  return (
    <div className="post_create-container">
      <header className="post_create-top">
        <button
          className="post_create-back"
          onClick={() => navigate(-1)}
        >
          <img src="../static/icons/arrow-left.svg" alt="뒤로가기" />
        </button>
        <div>의견</div>
      </header>
      <main>
        <section className="post_create-write">
          <form action="">
            <label htmlFor="attatchment">
              <img src="../static/icons/icon-camera.svg" alt="사진 첨부" />
            </label>
            <input
              type="file"
              id="attatchment"
              accept="image/*"
              multiple
              className="post_create-write-attatchment"
            />
            <textarea placeholder="이동과 관련된 이야기를 나눠보세요." />
            <TagSelector
              type="radio"
              handleChangeselectedRegions
                ={handleChangeselectedRegion}
              handleChangeselectedTransportations
                ={handleChangeselectedTransportation}
            />
            <button type="submit" className="post_create-submit">남기기</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default PostCreate;
