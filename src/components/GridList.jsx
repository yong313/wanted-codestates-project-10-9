import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addViewQuantity } from '../modules/viewQuantity';

const lists = [
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
  {
    id: 1,
    imgUrl:
      'https://i.balaan.io/review/dcc148d84e0e4d17cc84939d6de6036d-t_300.webp',
  },
  {
    id: 2,
    imgUrl:
      'https://i.balaan.io/review/e39dcd37d3dfe9712c7f4650137f4059-t_300.webp',
  },
  {
    id: 3,
    imgUrl:
      'https://i.balaan.io/review/6fbfc42449289685fa9ec3853988927e-t_300.webp',
  },
  {
    id: 4,
    imgUrl:
      'https://i.balaan.io/review/d0d824a7a8138bb248faf2548ea534d0-t_300.webp',
  },
  {
    id: 5,
    imgUrl:
      'https://i.balaan.io/review/7a8f9deb9cb65ed028ba05162ec4499d-t_300.webp',
  },
  {
    id: 6,
    imgUrl:
      'https://i.balaan.io/review/21b974afb6f98374b5f86b09cd6cc8fe-t_300.webp',
  },
];

export default function GridList() {
  const quantity = useSelector((state) => state.viewQuantity.quantity);
  const showLists = lists.slice(0, quantity);
  const dispatch = useDispatch();

  const handleScroll = () => {
    // if (quantity > lists.length) return;

    document.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop,
        windowHeight = window.innerHeight,
        height = document.body.scrollHeight - windowHeight,
        scrollPercentage = scrollTop / height;
      if (scrollPercentage === 1 && quantity < lists.length) {
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
`;
