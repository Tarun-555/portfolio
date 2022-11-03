import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/constants';
import Card from '../components/Card';
import portfolioImg from '../assets/portfolio_screenshot.png';
import foodappImg from '../assets/foodapp_screenshot.png';
import mernImg from '../assets/mern.png';
import toastImg from '../assets/not_screenshot.png';

const Works = () => {
  return (
    <WorksContainer>
      <Title>Works</Title>
      <CardsContainer>
        <Card
          imgSrc={portfolioImg}
          title={'Portfolio Website'}
          body={<>hello</>}
          // bgColor={'linear-gradient(to right, #ff1b6b, #bc4e9c)'}
          bgColor={'linear-gradient(to right, #7b4397, #dc2430)'}
        />
        <Card
          imgSrc={foodappImg}
          title={'Food App'}
          body={<>hello</>}
          bgColor={'linear-gradient(to right, #3494e6, #ec6ead);'}
        />

        <Card
          imgSrc={mernImg}
          title={'Grocery Bag'}
          body={<>hello</>}
          bgColor={'linear-gradient(to right, #da4453, #89216b);'}
        />

        <Card
          imgSrc={toastImg}
          title={'Notification Toaster'}
          body={<>hello</>}
          bgColor={' linear-gradient(to right, #e55d87, #5fc3e4)'}
        />
      </CardsContainer>
    </WorksContainer>
  );
};

export default Works;

const WorksContainer = styled.div`
  padding: 20px;
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  font-size: 20px;
  color: ${colors.ashColor};
  text-align: center;
  font-size: 30px;
  text-decoration: underline;
  text-decoration-color: ${colors.textColor1};
  text-decoration-thickness: 5px;
  text-underline-position: under;
  text-transform: uppercase;
`;
