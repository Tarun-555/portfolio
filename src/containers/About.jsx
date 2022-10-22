import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faStarOfLife,
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '../assets/constants';
import { Education } from '../assets/data/portfolioData';
import Card from '../components/Card';

const CardJsx = (data) => {
  return (
    data &&
    data.length > 0 &&
    data.map((item) => {
      return (
        <List>
          <FontAwesomeIcon icon={faStarOfLife} />
          <span>{item}</span>
        </List>
      );
    })
  );
};

const About = () => {
  return (
    <AboutContainer>
      <Title>About</Title>
      <Section>
        <div>
          <h2>Education</h2>
        </div>
        <div>
          <h2>Experiences</h2>
        </div>
        <div>
          <h2>Interests</h2>
        </div>
      </Section>
      {/* <Card
        Title="Education"
        backgroundColor="#ccc"
        body={CardJsx(Education)}
      /> */}
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 40px 20px;
`;

const Section = styled.div`
  display: flex;
`;

const Title = styled.h3`
  font-size: 20px;
  color: ${colors.ashColor};
  text-align: center;
  font-size: 30px;
  text-decoration: underline;
  text-decoration-color: ${colors.textColor1};
  text-decoration-thickness: 5px;
`;

const List = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  > * {
    &:first-child {
      margin-right: 10px;
    }
  }
`;

export default About;
