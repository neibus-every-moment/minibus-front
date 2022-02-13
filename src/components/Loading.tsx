import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Loading() {
  return (
    <div className="loading">
      <ClipLoader
        color={'$neibus02'}
        loading={true}
        size={'20vw'}
      />
    </div>
  );
}

export default Loading;
