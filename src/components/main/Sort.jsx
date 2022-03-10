import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import px2Rem from '../utils/pxToRem';
import { GrPowerReset } from 'react-icons/gr';
export default function Sort() {
  const criterias = ['전체', '최신순', '리뷰 카운트순'];
  const [stateArr, setStateArr] = useState([true, false, false]);
  const setOnClick = (idx) => {
    setStateArr((prev) =>
      prev.map(() => false).map((_, i) => i === idx && true),
    );
  };

  const initialState = [
    {
      id: null,
      imgUrl: null,
      rating: null,
      title: null,
      content: null,
      comments: [
        {
          // 댓글
          nickname: null,
          comment: null,
        },
      ],
      date: null, // 등록시 생성, 더미는 랜덤 date
      likes: null, // boolean
      reviewCount: null, // 더미생성시 랜덤
    },
  ];
  return (
    <div>
      <SortBar px2Rem={px2Rem}>
        {criterias.map((text, idx) => (
          <div style={{ width: '80%' }}>
            <TextWrapper
              key={idx}
              state={stateArr[idx]}
              px2Rem={px2Rem}
              onClick={() => setOnClick(idx)}
            >
              {text}
            </TextWrapper>
          </div>
        ))}
        <GrPowerReset style={{ width: '20%', marginRight: '0.5rem' }} />
      </SortBar>
    </div>
  );
}
const SortBar = styled.div`
  ${({ px2Rem }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    height: ${px2Rem(83)};
    top: ${px2Rem(78)};
    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;
const TextWrapper = styled.p`
  ${({ px2Rem }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${px2Rem(50)};
    background: ${({ state }) => (state ? '#E7E8F9' : '#ffffff')};
    ${({ state }) =>
      !state &&
      css`
        border: 1px solid #cccccc;
      `}
    border-radius: 3rem;
    margin-left: 0.5rem;
    padding: 1rem;
  `}
`;
