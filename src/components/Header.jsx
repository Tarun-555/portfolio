import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../assets/constants';
import { scrollIntoViewWithOffset } from '../utils/scrollIntoViewWithOffset';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleClick = (section) => {
    if (section == 'home') {
      scrollIntoViewWithOffset('home-section', 70);
    }
    if (section == 'about') {
      scrollIntoViewWithOffset('about-section', 70);
    }
    if (section == 'works') {
      scrollIntoViewWithOffset('work-section', 70);
    }
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => handleClick('home')}>Tarun Ragiri</Logo>
      <HeaderListContainer>
        <HeaderListItem onClick={() => handleClick('home')}>
          Home
        </HeaderListItem>
        <HeaderListItem onClick={() => handleClick('about')}>
          About
        </HeaderListItem>
        <HeaderListItem onClick={() => handleClick('works')}>
          Works
        </HeaderListItem>
      </HeaderListContainer>
      <MenuIcon onClick={() => setModalOpen(true)}>
        <Line />
        <Line />
        <Line />
      </MenuIcon>
      <NavModal isOpen={isModalOpen}>
        <span
          style={{
            color: '#fff',
            fontSize: '50px',
            position: 'absolute',
            right: '10px',
            top: '10px',
            cursor: 'pointer',
          }}
          onClick={() => setModalOpen(false)}
        >
          &#10006;
        </span>
        <ul
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%,-50%)`,
            listStyle: 'none',
          }}
        >
          <NavModalItem
            isOpen={isModalOpen}
            onClick={() => {
              handleClick('home');
              setModalOpen(false);
            }}
          >
            Home
          </NavModalItem>
          <NavModalItem
            isOpen={isModalOpen}
            onClick={() => {
              handleClick('about');
              setModalOpen(false);
            }}
          >
            About
          </NavModalItem>
          <NavModalItem
            isOpen={isModalOpen}
            onClick={() => {
              handleClick('works');
              setModalOpen(false);
            }}
          >
            Works
          </NavModalItem>
        </ul>
      </NavModal>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  background-color: #151518;
  box-shadow: 0px 1px 3px 1px ${colors.textColor2};
  height: 60px;
`;

const switchColors = keyframes`
0% {  text-shadow: 1px 2px orange; }
50% {  text-shadow: 1px 2px blue; }
100% {  text-shadow: 1px 2px green; }
`;

const Logo = styled.div`
  color: ${colors.textColor1};
  font-weight: bold;
  font-family: 'Russo One', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1.6em;
  cursor: pointer;
  &:hover {
    animation-name: ${switchColors};
    animation-duration: 3s;
  }
`;

const HeaderListContainer = styled.ul`
  list-style: none;
  color: ${colors.textColor1};
  cursor: pointer;
  @media (max-width: 778px) {
    display: none;
  }
`;

const HeaderListItem = styled.li`
  display: inline-block;
  width: 60px;
  margin: 0px 20px;
  border: 2px solid ${colors.textColor1};
  padding: 4px 8px;
  border-radius: 1rem;
  text-align: center;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  text-transform: uppercase;
  &:hover {
    background-color: ${colors.textColor1};
    color: #fff;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 778px) {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
  }
`;

const Line = styled.div`
  height: 5px;
  width: inherit;
  background-color: ${colors.textColor1};
  display: block;
  margin-bottom: 5px;
`;

const NavModal = styled.div`
  display: ${(props) => (props.isOpen ? `block` : `none`)};
  position: absolute;
  top: 0;
  left: ${(props) => (props.isOpen ? 0 : `100%`)};
  width: ${(props) => (props.isOpen ? `100%` : `0%`)};
  right: 0;
  background-color: black;
  opacity: 0.9;
  height: 650px;
`;

const NavModalItem = styled.li`
  cursor: pointer;
  color: ${colors.textColor1};
  font-weight: bold;
  font-size: 50px;
  margin: 25px 0px;
  transform: ${(props) =>
    props.isOpen ? `translateX(0px)` : `translateX(500px)`};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: transform 0.5s, opacity 2s;
`;

export default Header;
