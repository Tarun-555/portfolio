import React from 'react';
import DevImg from '../assets/svg/dev.svg';
import styled from 'styled-components';
import { colors } from '../assets/constants';
import { faHand, faDownload } from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faJs,
  faCss3,
  faHtml5,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingPage = () => {
  return (
    <div style={{ height: '85%', width: '100%', paddingTop: '50px' }}>
      <div style={{ padding: '50px 20px', boxSizing: 'border-box' }}>
        <h2
          style={{
            backgroundColor: `${colors.textColor1}`,
            color: '#fefefe',
            width: 'max-content',
            padding: '10px 30px',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '1px',
            borderBottomRightRadius: '20px',
            borderBottomLeftRadius: '1px',
          }}
        >
          Hello
          <span style={{ marginLeft: '5px' }}>
            <FontAwesomeIcon icon={faHand} size="1x" color={'gold'} />
          </span>
        </h2>
        <DescText>
          I'm Tarun, a Full Stack Web Developer having experience in developing
          web and mobile based applications using React and React Native. I have
          got 2+ years of experience in developing web applications and looking
          for opportunities to learn, grow and develop.
        </DescText>
      </div>
      <ImgContainer>
        <img
          src={DevImg}
          style={{ height: '90%', width: '100%' }}
          alt={'img'}
        />
      </ImgContainer>
      <IconsContainer>
        <div>
          <FontAwesomeIcon icon={faHtml5} color={'#dd4b25'} size="3x" />
          <p
            style={{ color: '#d0cde1', textAlign: 'center', fontSize: '14px' }}
          >
            HTML
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCss3} color={'#264de4'} size="3x" />
          <p
            style={{ color: '#d0cde1', textAlign: 'center', fontSize: '14px' }}
          >
            CSS
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faJs} color={'#ffda3e'} size="3x" />
          <p
            style={{ color: '#d0cde1', textAlign: 'center', fontSize: '14px' }}
          >
            JS
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faReact} color={'#5dd2f3'} size="3x" />
          <p
            style={{ color: '#d0cde1', textAlign: 'center', fontSize: '14px' }}
          >
            React
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faNodeJs} color={'#51a03c'} size="3x" />
          <p
            style={{ color: '#d0cde1', textAlign: 'center', fontSize: '14px' }}
          >
            NodeJs
          </p>
        </div>
      </IconsContainer>
      <BtnContainer>
        <span>Looking for developer?</span>
        <Button as="a" href="/resume.pdf" download>
          Download Resume
          <FontAwesomeIcon
            icon={faDownload}
            size="1x"
            color={colors.textColor1}
          />
        </Button>
        <Button>Hire me!!!</Button>
      </BtnContainer>
      <Polygon />
    </div>
  );
};

const ImgContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 100px;
  height: 500px;
  width: 500px;
  margin: 0px 10px;
  @media (max-width: 778px) {
    height: 80%;
    width: 80%;
    position: relative;
    top: 0;
    right: -50px;
  }
  @media (max-width: 500px) {
    right: -20px;
  }
`;

const DescText = styled.h2`
  color: #fefefe;
  width: calc(95% - 520px);
  font-family: Saira Semi Condensed, sans-serif;
  letter-spacing: 0.01rem;
  line-height: 2em;
  margin-top: 20px;
  @media (max-width: 778px) {
    width: 100%;
  }
`;

const IconsContainer = styled.div`
  width: calc(95% - 520px);
  height: 20%;
  display: flex;
  margin-bottom: 25px;
  justify-content: space-evenly;
  @media (max-width: 778px) {
    width: 100%;
    margin: 25px 0px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin: 40px 25px;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 778px) {
    justify-content: center;
  }
`;

const Button = styled.div`
  border: 2px solid ${colors.textColor1};
  width: max-content;
  padding: 10px 20px;
  color: ${colors.textColor1};
  transition: ease-out 0.5s;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 ${colors.textColor1};
  font-weight: bold;
  border-radius: 5px;
  margin: 10px;
  text-decoration: none;
  &:hover {
    box-shadow: inset 300px 0 0 0 ${colors.textColor1};
    color: #fff;
    > * {
      &:first-child {
        // margin-left:10px;
        color: #fff;
        transition: 1s;
      }
    }
  }
  > * {
    &:first-child {
      margin-left: 10px;
    }
  }
`;

const Polygon = styled.div`
  clip-path: polygon(100% 0%, -50% 100%, 100% 100%, 100% 100%);
  height: 130px;
  width: 100%;
  background-color: ${colors.textColor1};
  z-index: -99;
`;

export default LandingPage;
