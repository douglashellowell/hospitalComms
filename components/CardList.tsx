import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCardList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardList: FC = ({ children }) => {
  return <StyledCardList>{children}</StyledCardList>;
};

export default CardList;
