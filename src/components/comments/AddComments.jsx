import React from 'react';
import Styled from 'styled-components';

const AddComments = ({ commentList }) => {
  // 댓글 작성 시간 표시 함수
  function displayedAt(createdAt) {
    const milliSeconds = new Date() - createdAt;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  }
  console.log(displayedAt(Date.now()));

  return (
    <>
      <Container>
        {commentList.map((el, idx) => (
          <ContentsBox key={idx}>
            <AddCommentsBox>
              <NickNameArea>{el.userNickname}</NickNameArea>
              <CommentsArea>{el.userComment}</CommentsArea>
            </AddCommentsBox>
            <ToolBox>
              <DateArea>{displayedAt(Date.now())}</DateArea>
              <ReComment>답글달기</ReComment>
              <ToEdit>수정하기</ToEdit>
              <DeleteComment>삭제</DeleteComment>
            </ToolBox>
          </ContentsBox>
        ))}
      </Container>
    </>
  );
};

const Container = Styled.div`
  width:100%;
  height: 100%;
`;

const ContentsBox = Styled.div`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 5px 20px;
`;

const AddCommentsBox = Styled.div`
  width: 100%;
  height: auto;
  padding: 15px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const NickNameArea = Styled.div`
  width: 26%;
  height: auto;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  padding-top: 2px;
  margin-right: 1%;
  color: #be9162;
`;

const CommentsArea = Styled.div`
  width: 73%;
  height: 100%;
  display: flex;
  font-size: 1.1rem;
  line-height: 1.425rem;
`;

const ToolBox = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
`;

const DateArea = Styled.div`
  width: auto;
  height: auto;
  color: #999;
  font-size: 0.85rem;
  font-weight: 300;
  margin-right: 15px;
`;

const ReComment = Styled(DateArea)`
  cursor: pointer;
`;

const ToEdit = Styled(DateArea)`
  cursor: pointer;
`;

const DeleteComment = Styled(DateArea)`
  cursor: pointer;
  margin-right: 0;
`;

export default AddComments;
