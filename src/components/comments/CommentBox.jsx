import React, { useState, useRef } from 'react';
import Styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import AddComments from './AddComments';

const CommentBox = () => {
  const userAddNickname = useRef('');
  const userAddComment = useRef('');

  const [pushComment, setPushComment] = useState(false);
  const [addUserComment, setAddUserComment] = useState(false);

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
            <NickName placeholder="닉네임" ref={userAddNickname} />
            <WriteComment
              placeholder="댓글을 입력해주세요 ✨"
              ref={userAddComment}
            />
            <SendBtn disabled={addUserComment}>게시</SendBtn>
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
  padding: 0 20px;
`;

const ContentBox = Styled(WriteCommentBox)`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4rem;
  overflow: hidden;
  padding: 0;
`;

const NickName = Styled.input`
  width: 20%;
  height: 100%;
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
