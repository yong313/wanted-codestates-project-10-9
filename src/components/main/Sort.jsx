import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import px2Rem from '../utils/pxToRem';
import { GrPowerReset } from 'react-icons/gr';
const MockApi = class {
  #id = 0;
  #dataArr = [];
  get dataArr() {
    return this.#dataArr;
  }
  set dataCnt(cnt) {
    for (let i = 0; i < cnt; i++) {
      this.#dataArr.push({
        id: this.#id++,
        date: parseInt(Math.random() * 100),
        imgUrl: `https://picsum.photos/${this.#id}/237/200/300`,
      });
    }
  }
};
const api = new MockApi();
api.dataCnt = 20;
export default function Sort() {
  const [lists, setLists] = useState(api.dataArr);
  const [stateArr, setStateArr] = useState([true, false, false]);

  const criterias = {
    table: [
      {
        0: {
          text: '전체',
          sort: () => setLists((prev) => [...prev.sort((a, b) => b.id - a.id)]),
          setState: (idx) => {
            setStateArr((prev) =>
              prev.map(() => false).map((_, i) => i === idx && true),
            );
          },
        },
        1: {
          text: '최신순',
          sort: () =>
            setLists((prev) => [...prev.sort((a, b) => b.date - a.date)]),
          setState: (idx) => {
            setStateArr((prev) =>
              prev.map(() => false).map((_, i) => i === idx && true),
            );
          },
        },
        2: {
          text: '리뷰 카운트순',
          sort: () =>
            setLists((prev) => [
              ...prev.sort((a, b) => b.reviewCount - a.reviewCount),
            ]),
          setState: (idx) => {
            setStateArr((prev) =>
              prev.map(() => false).map((_, i) => i === idx && true),
            );
          },
        },
      },
    ],
    get data() {
      const arr = [];
      for (let idx = 0; idx < 3; idx++) arr.push(this.table[0][idx]);
      return arr;
    },
    setOnClick(idx) {
      this.table[0][idx]?.setState(idx);
      this.table[0][idx]?.sort();
    },
  };
  console.log(lists);
  return (
    <div>
      <SortBar px2Rem={px2Rem}>
        {criterias.data.map((obj, idx) => (
          <div key={idx} style={{ width: '80%' }}>
            <TextWrapper
              state={stateArr[idx]}
              px2Rem={px2Rem}
              onClick={() => criterias.setOnClick(idx)}
            >
              {obj.text}
            </TextWrapper>
          </div>
        ))}
        <GrPowerReset
          style={{ width: '20%', marginRight: '0.5rem', cursor: 'pointer' }}
        />
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
  ${({ px2Rem }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
