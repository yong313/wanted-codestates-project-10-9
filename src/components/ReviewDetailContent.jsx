import React from 'react';
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
  console.log('');
  return (
    <ContentWrapper>
      <Top>
        <Title>너무 예뻐요</Title>
        <Date>2022-03-10</Date>
      </Top>
      <ImageWrapper>
        <img src={Img1} alt="리뷰_이미지_1" />
      </ImageWrapper>
      <div>
        <button>
          <FaRegHeart />
        </button>
        <button>
          <FaShareAlt />
        </button>
      </div>
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div>
        <p>
          리뷰평
          <br />
          어쩌구 저쩌구 ~!
        </p>
      </div>
    </ContentWrapper>
  );
}
const ContentWrapper = styled.section`
  width: 100%;
  height: 100%;
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

export default ReviewDetailContent;
