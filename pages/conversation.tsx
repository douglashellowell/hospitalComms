import React from 'react';
import AudioCard from '../components/AudioCard';
import CardList from '../components/CardList';
import { Audio } from '../types/Audio';

const Conversation = () => {
  const conversations: Audio[] = [
    { text: 'hello', altText: 'hello', audioFile: 'hello.mp3', icon: '👋' },
    { text: 'hello', altText: 'hello', audioFile: 'hello.mp3', icon: '👋' },
    { text: 'hello', altText: 'hello', audioFile: 'hello.mp3', icon: '👋' },
    { text: 'hello', altText: 'hello', audioFile: 'hello.mp3', icon: '👋' },
    { text: 'hello', altText: 'hello', audioFile: 'hello.mp3', icon: '👋' },
  ];

  return (
    <CardList>
      {conversations.map((conversation, i) => {
        return (
          <li>
            <AudioCard
              key={i}
              text={conversation.text}
              altText={conversation.altText}
              audioFile={conversation.audioFile}
            />
          </li>
        );
      })}
    </CardList>
  );
};

export default Conversation;
