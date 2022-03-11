const ADD_REVIEW = 'reviews/ADD_REVIEW';
const ADD_COMMENT = 'reviews/ADD_COMMENT';
const SORT_REVIEW = 'reviews/SORT_REVIEW';

let count = 99;

export const addReview = (review) => ({
  type: ADD_REVIEW,
  review,
});

export const addComment = (comments, idx) => ({
  type: ADD_COMMENT,
  comments,
});

export const sortReview = (bySort) => ({
  type: SORT_REVIEW,
  bySort,
});

const MockApi = class {
  #id = 0;
  #dataArr = [];
  get dataArr() {
    return this.#dataArr;
  }
  set dataCnt(cnt) {
    for (let i = 200; i < cnt; i++) {
      this.#dataArr.push({
        id: this.#id++,
        date: new Date(2022, parseInt(Math.random() * (12 - 1)) + 1, parseInt(Math.random() * (31 - 1)) + 1),
        imgUrl: `https://picsum.photos/id/${this.#id}/200/300`,
        rating: parseInt(Math.random() * 5) + 1, // number
        title: '좋아요',
        content: `사이즈 s랑 고민했는데 xs 해도 넉넉하게 잘 맞았어요!!! 너무이쁘고 질도 다른 브랜드랑 비교했을때 튼튼하고 좋았어요 너무 만족합니다`,
        comments: [
          {
            // 댓글
            nickname: null,
            comment: null,
          },
        ],
        likes: false, // boolean
        reviewCount: parseInt(Math.random() * 100) + 1, // 더미생성시 랜덤
      });
    }
  }
};

const api = new MockApi();
api.dataCnt = 400;

const initialState = [...api.dataArr];

export default function submit(state = initialState, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return [
        ...state,
        {
          id: count++,
          imgUrl: action.imgUrl,
          rating: action.rating,
          title: action.title,
          content: action.content,
          date: new Date(),
        }, // 등록시 생성, 더미는 랜덤 date
      ];
    case ADD_COMMENT:
      const newState = {
        ...state[action.idx],
        comments: [
          ...state[action.idx].comments,
          {
            nickname: action.comments.nickname,
            comment: action.comments.comment,
          },
        ],
      };
      const modifyState = [...state];
      modifyState[action.idx] = newState;

      return [...modifyState];

    case SORT_REVIEW:
      switch (action.bySort) {
        case 0:
          return [...state.sort((a, b) => a.id - b.id)];
        case 1:
          return [...state.sort((a, b) => b.date.getTime() - a.date.getTime())];
        case 2:
          return [...state.sort((a, b) => b.reviewCount - a.reviewCount)];
        default:
          return;
      }

    default:
      return state;
  }
}
