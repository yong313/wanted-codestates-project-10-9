import React from 'react';
import styled from 'styled-components';
import { BsGrid3X3, BsViewList } from 'react-icons/bs';
import { css } from 'styled-components';
export default function SelectListBtn({ setShowList, showList }) {
  return (
    <Container>
      <Button showList={showList} onClick={() => setShowList(true)}>
        <BsGrid3X3 />
      </Button>
      <Button showList={!showList} onClick={() => setShowList(false)}>
        <BsViewList />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 61px;
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
  font-size: 2rem;
  ${({ showList }) => {
    if (!showList) {
      return css`
        color: #b3b3b3;
      `;
    }
  }}
`;
