import axios from 'axios';
import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TagSelector from '../components/TagSelector';
import useInput from '../hooks/useInput';

interface ImagesInfo {
  [x: string]: string;
}

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
  const [imagesInfo, setImagesInfo] = useState<ImagesInfo>({});

  const [text, handleChangeText] = useInput('');

  const handleUploadImages = (
    e:React.ChangeEvent<HTMLInputElement>
  ) => {
    if (imageFiles.length >= 10) {
      alert('사진은 10개 이하로 등록해주세요!');
      return;
    }

    if (e.target.files) {
      const newImagesInfo:ImagesInfo = {};
      const newImageFiles = [];
      const submitImagesCount = e.target.files.length > 10 ?
        10 : e.target.files.length;
      const submitableImageCount = 10 - imageFiles.length;
      const limit = submitImagesCount > submitableImageCount ?
        submitableImageCount : submitImagesCount;

      for (let i = 0;i < limit ;i++) {
        const newImagePath = URL.createObjectURL(e.target.files[i]);
        if (!Object.keys(imagesInfo).includes(newImagePath)) {
          newImagesInfo[newImagePath] = e.target.files[i].name;
          newImageFiles.push(e.target.files[i]);
        }
      }
      setImagesInfo({ ...imagesInfo, ...newImagesInfo });
      setImageFiles([...imageFiles, ...newImageFiles]);
    }
  };

  const handleDeleteImages
    = useCallback((e:any) => {
      if (Object.keys(imagesInfo).includes(e.target.id)) {
        delete imagesInfo[e.target.id];
        setImageFiles([
          ...imageFiles.filter(
            file => {
              return file.name !== e.target.value;
            }),
        ]);
      } //여기서 e:any는 e.target.id때문에 작성했습니다. 원래 Event객체에 id라는 값이 없지만 써야해서..
    }, [imagesInfo, setImagesInfo, imageFiles, setImageFiles]);

  const navigate = useNavigate();

  const imageInputRef = useRef<any>();
  const handleClickUploadButton = () => {
    imageInputRef.current.focus();
  };

  const handleSubmitPost
    = useCallback(async(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData();

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

      const request = {
        userId: 1,
        content: text,
        region: selectedRegion,
        transportation: selectedTransportation,
      };

      formData.append(
        'request',
        new Blob([JSON.stringify(request)],
          { type: 'application/json' }));

      if (imageFiles.length) {
        imageFiles.forEach(file => formData.append('img', file));
      }

      const { data: { data } } = await axios.post(
        'http://3.37.182.59:8080/api/post'
        , formData
      );

      if (typeof data === 'number') {
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
            <label htmlFor="images" onClick={handleClickUploadButton}>
              <img src="../static/icons/icon-camera.svg" alt="사진 첨부" />
            </label>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              hidden
              ref={imageInputRef}
              onChange={handleUploadImages}
            />
            <p>게시글 등록 시 파일명에 한글이 포함되면 안됩니다.</p>
            {Object.entries(imagesInfo).map(image => (
              <div key={image[0]} >
                <button
                  type="button"
                  onClick={handleDeleteImages}
                  id={image[0]}
                  value={image[1]}>
                  삭제
                </button>
                <img
                  src={image[0]}
                  alt="유저 등록 이미지"
                  width="100px" />
              </div>
            ))}

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
