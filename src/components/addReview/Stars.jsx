import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function Stars() {
  const starRef = useRef();
  const [showStar, setShowStar] = useState(false);
  const [mousePosition, setMousePosition] = useState(0);
  const handleOnClick = (e) => {
    const a =
      Number(e.pageX) - Number(starRef.current.getBoundingClientRect().x);
    setMousePosition(Number(a));
    console.log(e.pageX);
    console.log(mousePosition);
    console.log(e.target.getBoundingClientRect());
    console.log(Number(a));
    console.log(starRef.current.getBoundingClientRect().x);
  };
  return (
    <>
      <Star>
        <Rating>평점</Rating>
        <StarRating>
          <EmptyStars ref={starRef}>
            <AiOutlineStar onMouseMove={handleOnClick} />
            <AiOutlineStar onMouseMove={handleOnClick} />
            <AiOutlineStar onMouseMove={handleOnClick} />
            <AiOutlineStar onMouseMove={handleOnClick} />
            <AiOutlineStar onMouseMove={handleOnClick} />
            <FilledStars width={mousePosition}>
              <AiFillStar onMouseMove={handleOnClick} />
              <AiFillStar onMouseMove={handleOnClick} />
              <AiFillStar onMouseMove={handleOnClick} />
              <AiFillStar onMouseMove={handleOnClick} />
              <AiFillStar onMouseMove={handleOnClick} />
            </FilledStars>
          </EmptyStars>
        </StarRating>
      </Star>
    </>
  );
}

const Star = styled.div`
  width: 100%;
  height: 10rem;
  border: 1px solid black;
`;

const Rating = styled.h1`
  width: 100%;
  font-size: 2rem;
`;

const StarRating = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  margin: 2rem auto;
`;

const EmptyStars = styled.span`
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  background-color: white;
  & svg {
    width: 3rem;
    height: 3rem;
  }
`;

const FilledStars = styled.span`
  position: absolute;
  max-width: ${(props) => props.width}px;
  font-size: 3rem;
  overflow: hidden;
  text-overflow: hidden;
  white-space: nowrap;
  top: 0;
  left: 0;
  & svg {
    color: gold;
  }
`;

export default Stars;
