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

const CardText = styled.div``;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  transition: 0.2s all ease-out;
  &:hover {
    background-image: url(${(props) => props.bgSrc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    // opacity: 0.4;
    background-color: rgba(0, 0, 0, 0.2);
    ${Image} {
      visibility: hidden;
    }
    ${CardTitle} {
      opacity: 1;
      visibility: show;
    }
  }
`;

export default Card;
