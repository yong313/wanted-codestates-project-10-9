import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';
export default function AddReviewBtn() {
  const [onMouse, setOnMouse] = useState(false);
  const navigate = useNavigate();
  const buttonHandler = (e) => {
    console.log(e.type);
    switch (e.type) {
      case 'click':
        return navigate('/addreview');
      case 'mouseenter':
        return setOnMouse(true);
      case 'mouseleave':
        return setOnMouse(false);
      default:
        return;
    }
  };

  return (
    <>
      <Button
        onClick={buttonHandler}
        onMouseEnter={buttonHandler}
        onMouseLeave={buttonHandler}
      >
        {onMouse ? (
          <Text onMouse={onMouse}>리뷰등록</Text>
        ) : (
          <BiPlus className="plus" />
        )}
      </Button>
    </>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  width: 3.125rem;
  height: 3.125rem;
  margin-left: 25.8125rem;
  background-color: #efefef;
  border-radius: 1.5625rem;
  font-size: 2rem;
  color: #fff;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #000;
    width: 140px;
    margin-left: 21.8125rem;
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: 1.5625rem;
`;
