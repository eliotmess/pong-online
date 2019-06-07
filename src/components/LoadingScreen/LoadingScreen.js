import React from 'react';
import styled from 'styled-components';
import './Loading.scss';

const LoadingWrapper = styled.div`
  height: 20vh;
  width: 30vw;
`;

const LoadingScreen = () => {
  return (
    <LoadingWrapper>
      <svg
        id="pongloading"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 541 166"
      >
        <path
          className="st0 loading"
          d="M277.3,73.2c0.1,44.8-25.6,74.8-62.4,80.4c-24.9,3.8-47.8-0.6-67.1-17.3C124.9,116.6,116.7,91.2,124,62 c7.3-29.3,26.7-48.4,56.1-54.9c31-6.9,58.7,0.9,80.3,25.3C272.6,46.1,277.3,62.8,277.3,73.2z M199.1,127.3 c26.7,0,49.4-21.1,49.5-46c0.1-25.4-23.1-47.9-49.5-47.9c-26.1,0-47.6,20.9-47.6,46.3C151.4,105.7,173.1,127.3,199.1,127.3z"
        />
        <path
          className="st0 loading"
          d="M406.3,154.7c-0.9,0.1-1.6,0.2-2.2,0.2c-9,0-18.1,0-27.7,0c0-1.5,0-2.8,0-4.2c0-32.6,0-65.2,0-97.9 c0-10.5-4.4-17-13.3-19.7c-10.3-3.2-21.2,0-26.6,7.7c-2.5,3.6-3.2,7.6-3.2,11.9c0,32.5,0,65,0,97.5c0,1.4,0,2.9,0,4.5 c-10.2,0-19.9,0-30.1,0c0-1.4,0-2.7,0-4c0-32.5,0.3-65-0.1-97.5c-0.4-27.1,17.8-44.1,40.4-47.5c20.8-3.2,38.8,2.6,53,18.5 c6.5,7.3,9.8,16,9.8,25.8c0.1,34.1,0,68.2,0,102.3C406.4,153,406.4,153.6,406.3,154.7z"
        />
        <path
          className="st0 loading"
          d="M500.6,130c0-7.5,0-14.6,0-22.1c-4.4,0-8.9,0-13.6,0c0-9.4,0-18.4,0-27.6c14.9,0,29.7,0,44.7,0 c0.1,1.1,0.2,2.1,0.2,3.1c0,22.9,0,45.8,0.1,68.6c0,2.6-0.9,3.6-3.2,4.1c-52.1,12.9-90-20.5-97.4-58.7 c-5.7-29.4,2.7-54.4,26.3-73.2c20.5-16.3,43.7-22.1,69.6-15.6c3.3,0.8,4.5,2.2,4.4,5.7c-0.3,9-0.1,18.1-0.1,27.7 c-2.3-0.9-4.3-1.7-6.3-2.4c-32.4-10.8-65.6,13-64.6,46.4c0.6,18.7,17.4,39.8,34.7,43.3C497,129.7,498.7,129.8,500.6,130z"
        />
        <path
          className="st0 loading"
          d="M5.5,7.6c1.7,0,3.1,0,4.6,0C25.6,7.7,41.2,7,56.6,8.1c21.7,1.5,36.8,14.7,40.8,33.7c4.3,21-5,41.9-23.4,52.1 c-7.1,3.9-14.6,6-22.7,5.9c-5.2,0-10.4,0-16,0c0,18.6,0,37,0,55.5c-10.1,0-19.8,0-29.7,0C5.5,106.2,5.5,57.2,5.5,7.6z M36.1,73.1 c4.9,0,9.6,0,14.3,0c8.6,0,16.2-6,19.2-14.9c2.5-7.6-0.4-16.3-7.3-21.3c-1.3-1-3-2.1-4.5-2.1c-7.2-0.2-14.4-0.1-21.7-0.1 C36.1,47.5,36.1,60.1,36.1,73.1z"
        />
        <path
          className="st1 loading"
          d="M199.1,127.3c-26.1,0-47.7-21.6-47.7-47.6c0.1-25.4,21.5-46.3,47.6-46.3c26.4,0,49.6,22.5,49.5,47.9 C248.5,106.2,225.8,127.3,199.1,127.3z"
        />
        <path
          className="st1 loading"
          d="M36.1,73.1c0-13,0-25.6,0-38.5c7.4,0,14.6-0.1,21.7,0.1c1.5,0,3.2,1.1,4.5,2.1c6.9,5,9.8,13.7,7.3,21.3 c-3,9-10.6,14.9-19.2,14.9C45.7,73.1,41,73.1,36.1,73.1z"
        />
      </svg>
    </LoadingWrapper>
  );
};

export default LoadingScreen;
