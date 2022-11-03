import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  return (
    <CardContainer bgColor={props.bgColor}>
      <img
        src={props.imgSrc}
        style={{ height: '240px', width: '100%', objectFit: 'cover' }}
      />
      <h1>{props.title}</h1>
      <div>{props.body}</div>
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

export default Card;
