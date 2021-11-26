import React from 'react';
import styled from 'styled-components';
import AudioCard from './AudioCard';

const StyledCommonAudio = styled.div``;

const CommonAudio = () => {
  return (
    <>
      <button>^</button>
      <ul>
        <li>
          <AudioCard text="Yes" altText="Yes" audioFile="hello.mp3" />
        </li>
        <li>
          <AudioCard text="No" altText="No" audioFile="hello.mp3" />
        </li>
      </ul>
    </>
  );
};

export default CommonAudio;
