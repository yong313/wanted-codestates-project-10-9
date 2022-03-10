import React, { useState } from 'react';
import Styled from 'styled-components';

const Button = (props) => {
  const { margin } = props;

  // 이미지 업로드 상태관리 - 임시
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // 버튼 마진 값 설정
  const styles = {
    margin: margin,
  };
  Button.defaultProps = {
    margin: '',
  };

  // 버튼 컴포넌트
  return (
    <>
      <ButtonBox {...styles} disabled={!buttonDisabled}>
        <Title>{props.title}</Title>
      </ButtonBox>
    </>
  );
};

const ButtonBox = Styled.button`
  width: 100%;
  height: 55px;
  border-radius: 10px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: all 0.35s ease;
  margin: ${(props) => props.margin};

  ${(props) =>
    props.disabled
      ? `
  color: #ccc;
  background-color: #efefef;
  cursor: default;
  `
      : ``}
`;

const Title = Styled.p`
  font-size: 1.125rem;
`;

export default Button;
