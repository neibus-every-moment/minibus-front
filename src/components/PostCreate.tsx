import React from 'react';

function PostCreate() {
  const transportations = [
    { id: 1, name: '🚃 지하철' },
    { id: 2, name: '🚌 버스' },
    { id: 3, name: '🚕 택시' },
    { id: 4, name: '기타교통수단' },
  ];
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '경기북부' },
    { id: 3, name: '경기남부' },
    { id: 4, name: '인천' },
  ];

  return (
    <div className='post_create-container'>
      <header className="post_create-top">
        <button className='post_create-back'>
          <img src="../static/icons/arrow-left.svg" alt="" />
        </button>
        <div>의견</div>
        <button className='post_create-submit'>남기기</button>
      </header>
      <main>
        <ul className='post_create-emoticon_list'>
          <li>emo 1</li>
          <li>emo 2</li>
          <li>emo 3</li>
          <li>emo 4</li>
          <li>emo 5</li>
        </ul>
        <textarea name="" id="" cols={30} rows={2} placeholder='본문에 이모티콘을 이용해 감정을 표현할 수 있어요.' />
        <form action="">
          <label htmlFor='attatchment'>
            <img src="../static/icons/icon_image.svg" alt="사진 첨부" />
          </label>
          <input
            type='file'
            id='attatchment'
            accept='image/*'
            multiple
            style={{ display: 'none' }}
          />
        </form>
        <hr />
        <section className='post_create-tags'>
          <ul className='post_create-transportations'>
            {transportations.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <ul className='post_create-regions'>
            {regions.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default PostCreate;
