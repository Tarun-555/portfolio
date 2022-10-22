import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  return (
    <CardContainer bgColor={props.backgroundColor}>
      <h1>{props.Title}</h1>
      <div>{props.body}</div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  box-shadow: 4px 4px 2px rgb(0 0 0 / 40%);
  width: 50%;
  padding: 20px;
  margin: 20px 0px;
  background: ${(props) => props.bgColor};
  border-radius: 5px;
`;

export default Card;
