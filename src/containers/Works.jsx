import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/constants';
import Card from '../components/Card';
import portfolioImg from '../assets/portfolio_screenshot.png';
import foodappImg from '../assets/foodapp_screenshot.png';
import mernImg from '../assets/mern.png';
import toastImg from '../assets/not_screenshot.png';
import { Projects } from '../assets/data/portfolioData';

const Works = () => {
  return (
    <WorksContainer id="work-section">
      <Title>Works</Title>
      <CardsContainer>
        {Projects.map((project) => (
          <Card
            imgSrc={project.img}
            title={project.title}
            body={<>{project.text}</>}
            bgColor={project.backgroundColor}
            source={project.src}
          />
        ))}
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
