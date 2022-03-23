import styled from "styled-components";
import React, { useState } from "react";
import DevImg from "../assets/dev.svg";

const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (mode) => {
    if (mode == "prev" && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (mode == "next" && currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      return;
    }
  };
  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselList index={currentSlide}></CarouselList>
        <CarouselList index={currentSlide}>2</CarouselList>
        <CarouselList index={currentSlide}>3</CarouselList>
        <Button type={"prev"} onClick={() => handleSlideChange("prev")}>
          &#11164;
        </Button>
        <Button type={"next"} onClick={() => handleSlideChange("next")}>
          &#11166;
        </Button>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  width: calc(100% * 3);
  overflow: hidden;
  height: 100%;
  display: flex;
`;

const CarouselList = styled.div`
  transform: ${(props) => `translatex(-${props.index * 100}%)`};
  width: 100%;
  height: 100%;
`;

const Button = styled.div`
  background-color: #000;
  font-size: 2rem;
  color: #fff;
  padding: 10px;
  opacity: 0.3;
  position: absolute;
  top: 50%;
  left: ${(props) => props.type == "prev" && 0};
  right: ${(props) => props.type == "next" && 0};
  &:hover {
    color: #fff;
    opacity: 0.7;
  }
`;

export default Carousel;
