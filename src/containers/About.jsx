import React, { useRef, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faGraduationCap,
  faStarOfLife,
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '../assets/constants';
import { Education, Experience } from '../assets/data/portfolioData';
import educationImg from '../assets/svg/education.svg';
import experienceImg from '../assets/svg/experience.svg';

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
  const section1 = useRef(null);
  const section2 = useRef(null);

  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const getHeight = (element) => element.offsetHeight;

    const section1Pos = topPos(section1.current);
    const section2Pos = topPos(section2.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      if (section1Pos < scrollPos) {
        setAnimate(true);
      }
      if (section2Pos + 150 < scrollPos) {
        setAnimate2(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <AboutContainer>
      <Title>About</Title>
      <Section>
        <Container>
          <Left>
            <AnimatedLeft ref={section1} animate={animate}>
              <img
                src={educationImg}
                alt={'img'}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </AnimatedLeft>
          </Left>
          <Right>
            <AnimatedRight ref={section1} animate={animate}>
              <RightTitle>Education</RightTitle>
              <div
                style={{ display: 'flex', width: '100%', marginBottom: '20px' }}
              >
                <span style={{ marginTop: '2px', marginRight: '8px' }}>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    color={colors.textColor1}
                  />
                </span>
                <div>
                  <SubTextTitle>
                    <h3>Jawaharlal Nehru Technological University</h3>
                    <h5>March 2015 - March 2020</h5>
                  </SubTextTitle>
                  <SubText>{Education.Graduation}</SubText>
                </div>
              </div>

              <div
                style={{ display: 'flex', width: '100%', marginBottom: '20px' }}
              >
                <span style={{ marginTop: '2px', marginRight: '8px' }}>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    color={colors.textColor1}
                  />
                </span>
                <div>
                  <SubTextTitle>
                    <h3>Narayana Junior College</h3>
                    <h5>March 2013 - March 2015</h5>
                  </SubTextTitle>
                  <SubText>{Education.XII}</SubText>
                </div>
              </div>
            </AnimatedRight>
          </Right>
        </Container>
      </Section>

      <Section>
        <Container>
          <Left>
            <AnimatedLeft ref={section2} animate={animate2}>
              <RightTitle>Experience</RightTitle>
              <div
                style={{ display: 'flex', width: '100%', marginBottom: '20px' }}
              >
                <span style={{ marginTop: '2px', marginRight: '8px' }}>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    color={colors.textColor1}
                  />
                </span>
                <div>
                  <SubTextTitle>
                    <h3>Propertyloop</h3>
                    <h5>March 2022 - Present</h5>
                  </SubTextTitle>
                  {Experience.Propertyloop.map((item) => (
                    <SubText>{item}</SubText>
                  ))}
                </div>
              </div>

              <div
                style={{ display: 'flex', width: '100%', marginBottom: '20px' }}
              >
                <span style={{ marginTop: '2px', marginRight: '8px' }}>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    color={colors.textColor1}
                  />
                </span>
                <div>
                  <SubTextTitle>
                    <h3>Panorbit</h3>
                    <h5>January 2021 - March 2022</h5>
                  </SubTextTitle>
                  {Experience.Panorbit.map((item) => (
                    <SubText>{item}</SubText>
                  ))}
                </div>
              </div>
            </AnimatedLeft>
          </Left>
          <Right>
            <AnimatedRight ref={section2} animate={animate2}>
              <img
                src={experienceImg}
                alt={'img'}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </AnimatedRight>
          </Right>
        </Container>
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

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  width: 100%;
  margin: 0px 0px 10px 0px;
`;

const Left = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: ${colors.textWhite};
`;

const AnimatedLeft = styled.div`
  width: 100%;
  height: 100%;
  transform: translateX(${({ animate }) => (animate ? 0 : '-100%')});
  transition: transform 2s;
`;

const Right = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnimatedRight = styled.div`
  width: 100%;
  height: 100%;
  transform: translateX(${({ animate }) => (animate ? 0 : '100%')});
  transition: transform 2s;
`;

const RightTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #ff1b6b;
  line-height: 25px;
  letter-spacing: 2px;
  font-family: 'Saira Semi Condensed';
`;

const SubTextTitle = styled.div`
  text-align: left;
  font-weight: 500;
  margin-bottom: 10px;
  // color: ${colors.textColor1};
  color: #f50a5c;
  letter-spacing: 0.05em;
  line-height: 26px;
`;

const SubText = styled.div`
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: ${colors.textWhite};
  margin-bottom: 5px;
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
