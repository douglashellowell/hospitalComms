import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav<{ isOpen: boolean }>`
  position: absolute;
  background-color: #cccccc;
  height: 100%;
  width: 300px;
  left: ${({ isOpen }) => (isOpen ? '0px' : '-300px')};
  transition: all 0.4s ease-out;

  ul {
    list-style: none;
    padding: 0;
  }
`;

const StyledNavToggle = styled.button`
  position: relative;
  left: 300px;
  padding: 2rem;
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledNav isOpen={isOpen}>
        <StyledNavToggle onClick={() => setIsOpen((b) => !b)}>
          &gt;
        </StyledNavToggle>
        <ul>
          <li>
            <Link href="/conversation">
              <a onClick={closeNav}>Conversation</a>
            </Link>
          </li>
          <li>
            <Link href="/pain">
              <a onClick={closeNav}>Pain</a>
            </Link>
          </li>
          <li>
            <Link href="/mood">
              <a onClick={closeNav}>Mood</a>
            </Link>
          </li>
          <li>
            <Link href="/food-drink">
              <a onClick={closeNav}>Food / Drink</a>
            </Link>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export default Nav;
