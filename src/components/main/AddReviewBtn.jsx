import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';
import { css } from 'styled-components';
export default function AddReviewBtn() {
  const [onMouse, setOnMouse] = useState(false);
  const navigate = useNavigate();

  const buttonHandler = (e) => {
    switch (e.type) {
      case 'click':
        return navigate('/addreview');
      case 'mouseleave':
        return setOnMouse(false);
      case 'mousemove':
        return setOnMouse(true);
      default:
        return;
    }
  };

  return (
    <>
      <Button
        onClick={buttonHandler}
        onMouseLeave={buttonHandler}
        onMouseMove={buttonHandler}
        onMouse={onMouse}
      >
        {onMouse ? <span>리뷰등록</span> : <BiPlus className="plus" />}
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
  transition: 0.2s;
  span {
    position: absolute;
    width: 100px;
    opacity: 0;
    font-size: 1111px;
    transition: 1.3s;
  }
  :hover {
    background-color: #000;
    width: 140px;
    margin-left: 21.8125rem;
    cursor: pointer;
  }
  ${({ onMouse }) => {
    console.log(onMouse);
    if (onMouse) {
      return css`
        span {
          opacity: 1;
          font-size: 1.5625rem;
        }
      `;
    }
  }}
`;
