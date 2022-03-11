import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  FaHeart,
  FaRegHeart,
  FaShareAlt,
  FaRegStar,
  FaStar,
} from 'react-icons/fa';

const ReviewDetailContent = React.memo(function ReviewDetailContent(props) {
  const [isLiked, setIsLiked] = useState(false);
  // 좋아요 값 처리 부모 요소에서!

  const onClickLikeButton = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <ContentWrapper>
      <Top>
        <Title>{props.review.title}</Title>
        <Date>{props.review.date.toString()}</Date>
      </Top>
      <ImageWrapper>
        <img src={props.review.imgUrl} alt={`리뷰_이미지_${props.review.id}`} />
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
            {props.review.content}
            {/* 리뷰평
            <br />
            어쩌구 저쩌구 ~! */}
          </p>
        </ReviewContent>
      </ImageInfoBox>
    </ContentWrapper>
  );
});

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
