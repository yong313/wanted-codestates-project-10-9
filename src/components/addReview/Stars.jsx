import React from 'react';
import styled from 'styled-components';
import {
  Star1,
  Star2,
  Star3,
  Star4,
  Star5,
  FilledStar1,
  FilledStar2,
  FilledStar3,
  FilledStar4,
  FilledStar5,
} from '../../Image.js';

function Stars() {
  return (
    <>
      <Star>
        <Rating>평점</Rating>
        <StarRating>
          <EmptyStars>
            <img src={Star1} alt="Star1" />
            <img src={Star2} alt="Star1" />
            <img src={Star3} alt="Star1" />
            <img src={Star4} alt="Star1" />
            <img src={Star5} alt="Star1" />
          </EmptyStars>
          <FilledStars>
            <img src={FilledStar1} alt="FilledStar1" />
            <img src={FilledStar2} alt="FilledStar1" />
            <img src={FilledStar3} alt="FilledStar1" />
            <img src={FilledStar4} alt="FilledStar1" />
            <img src={FilledStar5} alt="FilledStar1" />
          </FilledStars>
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
  justify-content: space-between;
  width: 80%;
  margin: 2rem auto;
  & img {
    width: 3rem;
    height: 3rem;
  }
`;

const EmptyStars = styled.span`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

const FilledStars = styled.span`
  display: none;
`;

export default Stars;
