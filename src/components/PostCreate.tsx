import React, { MouseEventHandler } from 'react';

function PostCreate() {
  const emoticons = [
    { id: 1, name: 'sad' },
    { id: 2, name: 'soso' },
    { id: 3, name: 'angry' },
    { id: 4, name: 'surprise' },
    { id: 5, name: 'delight' },
  ];

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

  const selectedTags: string[] = [];

  // TODO: 타입 호환 문제 해결
  const handleToggleTag = (event: MouseEventHandler<HTMLLIElement> | any): void => {
    const { target: { classList, innerText } } = event;

    if (classList.contains('active')) {
      classList.remove('active');
      selectedTags.splice(selectedTags.indexOf(innerText), 1);
      return;
    }

    classList.add('active');
    selectedTags.push(innerText);
  };

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
          {emoticons.map(({ id, name }) => (
            <li key={id}>
              <img src={`
                ../static/icons/emoji-${name}.svg
              `} alt="" />
            </li>
          ))}
        </ul>
        <section className='post_create-write'>
          <textarea name="" id="" placeholder='본문에 이모티콘을 이용해 감정을 표현할 수 있어요.' />
          <form action="">
            <label htmlFor='attatchment'>
              <img src="../static/icons/icon_image.svg" alt="사진 첨부" />
            </label>
            <input
              type='file'
              id='attatchment'
              accept='image/*'
              multiple
              className='post_create-write-attatchment'
            />
          </form>
        </section>
        <hr />
        <section className='post_create-tags'>
          <ul className='post_create-transportations'>
            {transportations.map(({ id, name }) => (
              <li
                key={id}
                onClick={handleToggleTag}
              >
                {name}
              </li>
            ))}
          </ul>
          <ul className='post_create-regions'>
            {regions.map(({ id, name }) => (
              <li
                key={id}
                onClick={handleToggleTag}
              >
                {name}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default PostCreate;
