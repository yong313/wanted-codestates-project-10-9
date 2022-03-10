import React, { useState } from 'react';
import Styled from 'styled-components';
import AddComments from './AddComments';

const CommentBox = () => {
  const [pushComment, setPushComment] = useState(false);
  const [infoCommnet, setInfoCommnet] = useState(false);
  return (
    <>
      <Container>
        <CommentList>
          {pushComment ? (
            <NoneComment>
              <p>
                <span>닉네임</span> 님의
                <br />
                리뷰에 첫 댓글을 남겨주세요 ☺️
              </p>
            </NoneComment>
          ) : (
            <AddComments pushComment={pushComment} />
          )}
        </CommentList>
        {/* 닉네임 댓글 작성 영역 */}
        <WriteCommentBox>
          <ContentBox>
            <NickName placeholder="닉네임"></NickName>
            <WriteComment placeholder="댓글을 입력해주세요 ✨"></WriteComment>
            <SendBtn disabled={!infoCommnet}>게시</SendBtn>
          </ContentBox>
        </WriteCommentBox>
      </Container>
    </>
  );
};

const Container = Styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
`;

const CommentList = Styled.div`
  width: 100%;
  height: auto;
  max-height: 375px;
  overflow: scroll;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoneComment = Styled.div`
  width: 100%;
  height: 125px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 1.125rem;
  line-height: 1.625rem;

  p > span {
    font-weight: bold;
  }
`;

const WriteCommentBox = Styled.div`
  width: 100%;
  height: 100px;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = Styled(WriteCommentBox)`
  width: 93%;
  height: 50px;
  background-color: #fff;
  border-radius: 50px;
  overflow: hidden;
`;

const NickName = Styled.input`
  width: 20%;
  height: 100%;
  padding-left: 10px;
  text-align: center;

  ::placeholder {
    color: #ccc;
  }
`;

const WriteComment = Styled(NickName)`
  width: 65%;
  height: 100%;
  text-align: left;
`;

const SendBtn = Styled.button`
  width: 15%;
  height: 100%;
  font-weight: bold;
  transition: all 0.35s ease;
  color: #000;

  ${(props) =>
    props.disabled
      ? `
  color: #ccc;
  font-weight: normal;
  cursor: default;
  `
      : ``}
`;

export default CommentBox;
