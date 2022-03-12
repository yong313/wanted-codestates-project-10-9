import React, { useState, useRef, useEffect } from 'react';
import Styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../modules/reviews';
import AddComments from './AddComments';

const CommentBox = () => {
  // 댓글 인풋에 입력 된 텍스트
  const userAddNickname = useRef(null);
  const userAddComment = useRef(null);

  // 댓글 추가 시 스크롤 위치 하단 고정
  const commentScroll = useRef();

  // 로컬에 저장된 값 상태관리
  const [commentList, setCommentList] = useState([]);

  const saveComment = (e) => {
    const userCommentArr = [
      ...commentList,
      {
        userNickname: userAddNickname.current.value,
        userComment: userAddComment.current.value,
      },
    ];
    // 로컬에 저장
    window.localStorage.setItem('saveComment', JSON.stringify(userCommentArr));
  };

  // 저장 버튼
  const inputHandler = () => {
    saveComment();
    setCommentList(JSON.parse(window.localStorage.getItem('saveComment')));
    userAddNickname.current.value = '';
    userAddComment.current.value = '';
  };

  // 댓글 추가 시 스크롤 위치 하단 고정
  const scrollToBottom = () => {
    if (commentScroll.current) {
      commentScroll.current.scrollTop = commentScroll.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [commentList.length]);

  return (
    <>
      <Container>
        <CommentList ref={commentScroll}>
          {commentList.length ? (
            <AddComments commentList={commentList} />
          ) : (
            <NoneComment>
              <p>
                <span>닉네임</span> 님의
                <br />
                리뷰에 첫 댓글을 남겨주세요 ☺️
              </p>
            </NoneComment>
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
            <SendBtn onClick={inputHandler}>게시</SendBtn>
          </ContentBox>
        </WriteCommentBox>
      </Container>
    </>
  );
};

const Container = Styled.div`
  width: 100%;
  height: auto;
  max-height: 475px;
  background-color: #f9f9f9;
`;

const CommentList = Styled.div`
  width: 100%;
  height: auto;
  max-height: 270px;
  overflow: scroll;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const NoneComment = Styled.div`
  width: 100%;
  height: 125px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
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
  background-color: #f9f9f9;
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
`;

export default CommentBox;
