import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FaHeart,
  FaRegHeart,
  FaShareAlt,
  FaRegStar,
  FaStar,
} from 'react-icons/fa';
import Img1 from '../assets/pic1.jpeg';

function ReviewDetailContent() {
  const [isLiked, setIsLiked] = useState(false);

  const onClickLikeButton = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <ContentWrapper>
      <Top>
        <Title>너무 예뻐요</Title>
        <Date>2022-03-10</Date>
      </Top>
      <ImageWrapper>
        <img src={Img1} alt="리뷰_이미지_1" />
      </ImageWrapper>
      <ImageInfoBox>
        <div>
          <StyledButton onClick={onClickLikeButton}>
            {isLiked ? <FaRegHeart /> : <FaHeart />}
          </StyledButton>
          <StyledButton style={{ marginLeft: '0.3rem' }}>
            <FaShareAlt />
          </StyledButton>
        </div>
        <Rating>
          <FaStar fill="#FFF684" />
          <FaStar fill="#FFF684" />
          <FaStar fill="#FFF684" />
          <FaStar fill="#FFF684" />
          <FaStar fill="#efefef" />
        </Rating>
        <ReviewContent>
          <p>
            리뷰평
            <br />
            어쩌구 저쩌구 ~!
          </p>
        </ReviewContent>
      </ImageInfoBox>
    </ContentWrapper>
  );
}
const ContentWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.3rem 1rem;
  background-color: #fff;
`;

const Title = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.1rem;
`;
const Date = styled.p`
  text-align: center;
  font-size: 0.9rem;
  line-height: 0.9rem;
  color: #999;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: auto;

  img {
    width: inherit;
  }
`;
const ImageInfoBox = styled.div`
  width: 100%;
  padding: 0 1rem;
`;
const StyledButton = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.35rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;
const Rating = styled.div`
  padding: 0.4rem 0 0.6rem 0;

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

const ReviewContent = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 1.5rem;
  p {
    font-size: 1rem;
    line-height: 1.4rem;
    width: 100%;
    height: auto;
  }
`;

export default ReviewDetailContent;
