import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  addViewQuantity,
  setShowDetailView,
  setStartIndex,
  setShowMoveToTopBtn,
} from '../modules/viewQuantity';

export default function GridList() {
  const quantity = useSelector((state) => state.viewQuantity.quantity);
  const lists = useSelector((state) => state.reviews);
  const showMoveToTopBtn = useSelector(
    (state) => state.viewQuantity.showMoveToTopBtn,
  );
  const showLists = lists.slice(0, quantity);
  const dispatch = useDispatch();

  const handleScroll = () => {
    // if (quantity > lists.length) return;

    document.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop,
        windowHeight = window.innerHeight,
        height = document.body.scrollHeight - windowHeight,
        scrollPercentage = scrollTop / height;

      if (scrollPercentage > 0.1 && !showMoveToTopBtn) {
        dispatch(setShowMoveToTopBtn(true));
      }
      if (scrollPercentage < 0.1 && showMoveToTopBtn) {
        dispatch(setShowMoveToTopBtn(false));
      }

      if (scrollPercentage >= 1 && quantity < lists.length) {
        // 전역상태관리를 통해 quantity 초기화 방지
        dispatch(addViewQuantity());
      }
    });
  };

  handleScroll();
  const imgClickHandler = (e) => {
    const idx = e.target.alt;
    dispatch(setStartIndex(idx));
    dispatch(setShowDetailView());
  };

  return (
    <Container>
      {showLists.map((list, idx) => (
        <Img key={idx} src={list.imgUrl} alt={idx} onClick={imgClickHandler} />
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
  :hover {
    cursor: pointer;
  }
`;
