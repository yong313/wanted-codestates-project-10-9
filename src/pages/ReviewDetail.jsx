import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../common/NavBar';
import CommentBox from '../components/comments/CommentBox';
import ReviewDetailContent from '../components/ReviewDetailContent';

const dummyReviewData = [
  {
    id: 1,
    imgUrl: 'https://i.balaan.io/review/5244a099085aa486bf33253e47026ccd.jpeg',
    rating: 4, // number
    title: '좋아요',
    content: `사이즈 s랑 고민했는데 xs 해도 넉넉하게 잘 맞았어요!!! 너무이쁘고 질도 다른 브랜드랑 비교했을때 튼튼하고 좋았어요 너무 만족합니다`,
    comments: [
      {
        // 댓글
        nickname: null,
        comment: null,
      },
    ],
    date: '2022-03-10', // 등록시 생성, 더미는 랜덤 date
    likes: false, // boolean
    reviewCount: null, // 더미생성시 랜덤
  },
  {
    id: 2,
    imgUrl: 'https://i.balaan.io/review/b95ef7ac23c5717ba7f577f4866f21fc.jpeg',
    rating: 5,
    title: '만족스러운 신발입니다',
    content: `마지막 42사이즈 구매하개 됐습니다
    재고 문의부터 배송까지 생각보다 빠르게 진행되어 
    너무 만족 스럽네요
    신발 잘신을께요`,
    comments: [
      {
        // 댓글
        nickname: null,
        comment: null,
      },
    ],
    date: '2022-03-10', // 등록시 생성, 더미는 랜덤 date
    likes: false, // boolean
    reviewCount: null, // 더미생성시 랜덤
  },
];

function ReviewDetail() {
  const [reviews, setReviews] = useState(dummyReviewData);

  return (
    <div>
      <NavBar content="리뷰 상세보기" />
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <ReviewDetailContent review={review} />
            <CommentBox comment={review.comments} />
          </div>
        );
      })}
    </div>
  );
}

export default ReviewDetail;
