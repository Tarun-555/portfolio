import React from 'react'
import styled from 'styled-components'
import { colors } from '../assets/constants'

const About = () => {
  return (
    <AboutContainer>
      <Title>About</Title>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  padding: 40px 20px;
`

const Title = styled.h3`
  font-size: 20px;
  color: ${colors.ashColor};
  text-align: center;
  font-size: 30px;
  text-decoration: underline;
  text-decoration-color: ${colors.textColor1};
  text-decoration-thickness: 5px;
`

export default About
