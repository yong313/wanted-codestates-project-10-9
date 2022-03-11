import React, { useState } from 'react';
import Styled from 'styled-components';
import CommentBox from '../components/comments/CommentBox';

import styled from 'styled-components';
import GridList from '../components/GridList';
import Sort from '../components/main/Sort';
import MoveToTopBtn from '../components/MoveToTopBtn';
import InfinityList from '../components/InfinityList';
import SelectListBtn from '../components/SelectListBtn';
export default function Main() {
  const [showList, setShowList] = useState(true);

  return (
    <Wrapper>
      <Sort />
      <SelectListBtn showList={showList} setShowList={setShowList} />
      {showList ? <GridList /> : <InfinityList />}
      <MoveToTopBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
