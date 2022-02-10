import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../apis/post';
import ImageInput from '../components/ImageInput';
import TagSelector from '../components/TagSelector';
import useInput from '../hooks/useInput';

function PostCreate() {
  const [
    selectedTransportation,
    handleChangeSelectedTransportation,
  ] = useInput('');
  const [
    selectedRegion,
    handleChangeSelectedRegion,
  ] = useInput('');

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [text, handleChangeText] = useInput('');

  const navigate = useNavigate();

  const handleSubmitPost
    = useCallback(async(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!selectedRegion) {
        alert('지역을 선택하세요!');
        return;
      }

      if (!selectedTransportation) {
        alert('타고 있는 교통수단을 선택하세요!');
        return;
      }

      if (!text.trim()) {
        alert('글 내용을 입력하세요!');
        return;
      }

      const response = await createPost(
        1,
        text,
        selectedRegion,
        selectedTransportation,
        imageFiles);

      if (typeof response === 'number') {
        alert('글 작성이 완료되었습니다!');
        navigate(-1);
        return;
      }
      alert('다시 시도해주세요!');
    }, [imageFiles, text, selectedRegion, selectedTransportation]);

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
          <form onSubmit={handleSubmitPost} encType="multipart/form-data">
            <ImageInput
              imageFiles={imageFiles}
              setImageFiles={setImageFiles}
            />
            <textarea
              placeholder="이동과 관련된 이야기를 나눠보세요."
              value={text}
              onChange={handleChangeText} />
            <TagSelector
              type="radio"
              handleChangeselectedRegions
                ={handleChangeSelectedRegion}
              handleChangeselectedTransportations
                ={handleChangeSelectedTransportation}
            />
            <button type="submit" className="post_create-submit">남기기</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default React.memo(PostCreate);
