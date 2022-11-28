import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/constants';

const Card = (props) => {
  return (
    <CardContainer bgColor={props.bgColor}>
      <ContentWrapper bgSrc={props.imgSrc}>
        <Image src={props.imgSrc} />
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.body}</CardText>
        <SrcLink href={props.source}>source code</SrcLink>
      </ContentWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  box-shadow: 4px 4px 2px rgb(0 0 0 / 40%);
  width: 45%;
  padding: 5px;
  margin: 20px 0px;
  background: ${(props) => props.bgColor};
  border-radius: 5px;
  height: 350px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
`;

const CardTitle = styled.h1`
  color: ${colors.textWhite};
`;

const CardText = styled.div`
  color: #edf2f4;
  font-family: monospace;
  font-size: 14px;
  padding: 2px;
`;

const SrcLink = styled.a`
  color: #ff1b6b;
  font-weight: bold;
  display: none;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  text-decoration: underline;
  text-underline-offset: 6px;
  opacity: 1;
  &:hover {
    cursor: pointer;
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  transition: 0.2s all ease-out;
  position: relative;
  &:hover {
    background-image: url(${(props) => props.bgSrc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
    }
    ${Image} {
      visibility: hidden;
    }
    ${CardTitle} {
      visibility: hidden;
    }
    ${CardText} {
      visibility: hidden;
    }
    ${SrcLink} {
      display: block;
    }
  }
`;

export default Card;
