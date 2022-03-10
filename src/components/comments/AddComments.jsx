import React from 'react';
import Styled from 'styled-components';

const AddComments = ({ pushComment }) => {
  // 댓글 단 시간
  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
  let time = {
    year: today.getFullYear().toString().substring(2, 4), //현재 년도 앞에 두자리 자름
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
  };
  let timestring = `${time.year}.${time.month}.${time.date} ${time.hours}:${time.minutes}`;
  return (
    <>
      {/* {pushComment.map((el, idx) => { */}
      <AddCommentsBox>
        <TopBox>
          <NickNameArea>test</NickNameArea>
          <DateArea>{timestring}</DateArea>
        </TopBox>
        <CommentsArea>test</CommentsArea>
      </AddCommentsBox>
      {/* })} */}
    </>
  );
};

const AddCommentsBox = Styled.div`
  width: 90%;
  height: auto;
  min-height: 76px;
  margin: 17px 0;
  border-radius: 15px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.08);
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  animation: fadeInMSG 0.85s cubic-bezier(0.22, 0.61, 0.36, 1);

  @keyframes fadeInMSG {
    from {
      opacity: 0;
      margin-left: 80px;
    }
    to {
      opacity: 1;
      margin-left: 0;
    }
  }
`;

const TopBox = Styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 3px;
`;

const NickNameArea = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  color: #be9162;
  margin-bottom: 7px;
`;

const DateArea = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  font-size: 11px;
  color: #ccc;
`;

const CommentsArea = Styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.425rem;
`;

export default AddComments;
