import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addViewQuantity } from '../modules/viewQuantity';
import ReviewDetailContent from './ReviewDetailContent';
import CommentBox from './comments/CommentBox';

export default function InfinityList() {
  const quantity = useSelector((state) => state.viewQuantity.quantity);
  const lists = useSelector((state) => state.reviews);
  const showLists = lists.slice(0, quantity);
  const dispatch = useDispatch();

  console.log(useSelector((state) => state.reviews));

  const handleScroll = () => {
    // if (quantity > lists.length) return;

    document.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop,
        windowHeight = window.innerHeight,
        height = document.body.scrollHeight - windowHeight,
        scrollPercentage = scrollTop / height;

      if (scrollPercentage >= 1 && quantity < lists.length) {
        // 전역상태관리를 통해 quantity 초기화 방지
        dispatch(addViewQuantity());
      }
    });
  };

  handleScroll();
  const imgClickHandler = (e) => {};
  return (
    <Container>
      {showLists.map((list, idx) => (
        <div key={list.id}>
          <ReviewDetailContent review={list} />
          <CommentBox comment={list.comments} />
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;
`;

const Img = styled.img`
  margin-top: 1px;
  width: 165px;
  height: 165px;
`;
