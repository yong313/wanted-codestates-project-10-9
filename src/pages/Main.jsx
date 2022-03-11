import React, { useState } from 'react';
import Styled from 'styled-components';
import CommentBox from '../components/comments/CommentBox';

import styled from 'styled-components';
import GridList from '../components/GridList';
import Sort from '../components/main/Sort';
import MoveToTopBtn from '../components/main/MoveToTopBtn';
import InfinityList from '../components/InfinityList';
import SelectListBtn from '../components/SelectListBtn';
import AddReviewBtn from '../components/main/AddReviewBtn';
export default function Main() {
  const [showList, setShowList] = useState(true);

  return (
    <Wrapper>
      <Sort />
      <SelectListBtn showList={showList} setShowList={setShowList} />
      {showList ? <GridList /> : <InfinityList />}
      <MoveToTopBtn />
      <AddReviewBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
