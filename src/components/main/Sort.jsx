import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import px2Rem from '../utils/pxToRem';
import { GrPowerReset } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll, selectRecent, selectCnt } from '../../modules/sort';
import { toast } from 'react-toastify';
import { sortReview } from '../../modules/reviews';

export default function Sort() {
  const datas = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  const textArr = ['전체', '최신순', '리뷰카운트순'];
  const selectSort = useSelector((state) => state.sort);
  // const criterias = {
  //   table: [
  //     {
  //       0: {
  //         text: ,
  //         // sort: () => setLists((prev) => [...prev.sort((a, b) => b.id - a.id)]),
  //       },
  //       1: {
  //         text:,
  //         // sort: () => setLists((prev) => [...prev.sort((a, b) => b.date - a.date)]),
  //       },
  //       2: {
  //         text: ,
  //         // sort: () => setLists((prev) => [...prev.sort((a, b) => b.reviewCount - a.reviewCount)]),
  //       },
  //     },
  //   ],
  //   get data() {
  //     const arr = [];
  //     for (let idx = 0; idx < 3; idx++) arr.push(this.table[0][idx]);
  //     return arr;
  //   },
  //   setOnClick(idx) {
  //     this.table[0][idx]?.sort();
  //   },
  // };
  const setOnclickHandler = (e) => {
    switch (e.target.innerText) {
      case '전체':
        dispatch(sortReview(0));
        return dispatch(selectAll());
      case '최신순':
        dispatch(sortReview(1));
        return dispatch(selectRecent());
      case '리뷰카운트순':
        dispatch(sortReview(2));
        return dispatch(selectCnt());
      default:
        toast.error('잘못된 클릭입니다.');
    }
  };

  // () => criterias.setOnClick(idx)
  return (
    <div>
      <SortBar px2Rem={px2Rem}>
        {textArr.map((text, idx) => (
          <div key={idx} style={{ width: '80%' }}>
            <TextWrapper selectSort={selectSort} idx={idx} px2Rem={px2Rem} onClick={setOnclickHandler}>
              {text}
            </TextWrapper>
          </div>
        ))}
        <GrPowerReset style={{ width: '20%', marginRight: '0.5rem', cursor: 'pointer' }} />
      </SortBar>
    </div>
  );
}
const SortBar = styled.div`
  ${({ px2Rem }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: ${px2Rem(83)};
    top: ${px2Rem(78)};
    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;
const TextWrapper = styled.p`
  ${({ px2Rem, selectSort, idx, state }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${px2Rem(50)};
    border-radius: 3rem;
    margin-left: 0.5rem;
    padding: 1rem;
  `}
  ${({ idx, selectSort }) => {
    return idx === selectSort
      ? css`
          background-color: #e7e8f9;
          border: 1px solid #cccccc;
        `
      : css`
          background-color: #ffffff;
          border: 1px solid #ffffff;
        `;
  }};
  cursor: pointer;
`;
