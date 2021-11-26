import { Howl } from 'howler';
import { FC } from 'react';
import styled from 'styled-components';
import { Audio } from '../types/Audio';

const StyledAudioCard = styled.button`
  padding: 1rem 2rem;
`;

const AudioCard: FC<Audio> = ({ text, altText, audioFile, icon, colour }) => {
  const audio = new Howl({
    src: [audioFile],
  });

  return <StyledAudioCard onClick={() => audio.play()}>{text}</StyledAudioCard>;
};

export default AudioCard;
