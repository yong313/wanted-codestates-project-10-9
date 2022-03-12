import React from 'react';
import NavBar from '../common/NavBar';
import CommentBox from '../components/comments/CommentBox';
import ReviewDetailContent from '../components/ReviewDetailContent';
import { useDispatch, useSelector } from 'react-redux';
import { addViewQuantity } from '../modules/viewQuantity';

function ReviewDetail({ returnButtonHandler }) {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const quantity = useSelector((state) => state.viewQuantity.quantity);
  const startIdx = useSelector((state) => state.viewQuantity.startIdx);
  const reviewsList = reviews.slice(startIdx, quantity);
  const handleScroll = () => {
    // if (quantity > lists.length) return;
    console.log('hii');

    document.addEventListener('wheel', () => {
      let scrollTop = document.documentElement.scrollTop,
        windowHeight = window.innerHeight,
        height = document.body.scrollHeight - windowHeight,
        scrollPercentage = scrollTop / height;
      if (scrollPercentage >= 1 && quantity < reviews.length) {
        // 전역상태관리를 통해 quantity 초기화 방지
        dispatch(addViewQuantity());
      }
    });
  };

  handleScroll();

  return (
    <div style={{ marginTop: '4rem' }}>
      <NavBar content="리뷰 상세보기" onClickHandler={returnButtonHandler} />
      {reviewsList.map((review) => {
        return (
          <div key={review.id}>
            <ReviewDetailContent review={review} />
            <CommentBox comment={review.comments} />
          </div>
        );
      })}
    </div>
  );
}

export default ReviewDetail;
