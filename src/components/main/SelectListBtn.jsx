import React from 'react';
import styled from 'styled-components';
import { BsGrid3X3, BsViewList } from 'react-icons/bs';
import { css } from 'styled-components';
export default function SelectListBtn({ setShowList, showList }) {
  return (
    <Container>
      <Button showList={showList} onClick={() => setShowList(true)}>
        <BsGrid3X3 className="icon" />
      </Button>
      <Button showList={!showList} onClick={() => setShowList(false)}>
        <BsViewList className="icon" />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 61px;
  margin-bottom: 2px;
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
  font-size: 2rem;
  border-bottom: 3px solid;
  padding: 15px 0;
  transition: 0.3s;
  ${({ showList }) => {
    if (!showList) {
      return css`
        color: #b3b3b3;
      `;
    }
  }};
`;
