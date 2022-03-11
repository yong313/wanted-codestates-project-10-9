import React, { useState } from 'react';
import styled from 'styled-components';
import GridList from '../components/GridList';
import Sort from '../components/main/Sort';
import MoveToTopBtn from '../components/main/MoveToTopBtn';
import InfinityList from '../components/InfinityList';
import SelectListBtn from '../components/SelectListBtn';
import AddReviewBtn from '../components/main/AddReviewBtn';
import ReviewDetail from './ReviewDetail';

export default function Main() {
  const [showList, setShowList] = useState(true);
  const [isReviewDetailVisible, setIsReviewDetailVisible] = useState(true);

  const hideReviewDetailModal = () => {
    setIsReviewDetailVisible(false);
  };

  return (
    <Wrapper>
      {isReviewDetailVisible && (
        <ReviewDetail returnButtonHandler={hideReviewDetailModal} />
      )}
      {!isReviewDetailVisible && (
        <>
          <Sort />
          <SelectListBtn showList={showList} setShowList={setShowList} />
          {showList ? <GridList /> : <InfinityList />}
        </>
      )}
      <MoveToTopBtn />
      <AddReviewBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
