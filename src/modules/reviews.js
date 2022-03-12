const ADD_REVIEW = 'reviews/ADD_REVIEW';
const ADD_COMMENT = 'reviews/ADD_COMMENT';

let count = 99;

export const addReview = (review) => ({
  type: ADD_REVIEW,
  review,
});

export const addComment = (idx, comments) => ({
  type: ADD_COMMENT,
  comments,
});

const MockApi = class {
  #id = 0;
  #dataArr = [];
  get dataArr() {
    return this.#dataArr;
  }
  set dataCnt(cnt) {
    for (let i = 0; i < cnt; i++) {
      this.#dataArr.push({
        id: this.#id++,
        date: new Date(),
        imgUrl: `https://picsum.photos/${this.#id}/237/200/300`,
        rating: parseInt(Math.random() * 5) + 1, // number
        title: '좋아요',
        content: `사이즈 s랑 고민했는데 xs 해도 넉넉하게 잘 맞았어요!!! 너무이쁘고 질도 다른 브랜드랑 비교했을때 튼튼하고 좋았어요 너무 만족합니다`,
        comments: [
          {
            // 댓글
            userNickname: null,
            userComment: null,
          },
        ],
        likes: false, // boolean
        reviewCount: null, // 더미생성시 랜덤
      });
    }
  }
};

const api = new MockApi();
api.dataCnt = 150;

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
            userNickname: action.comments.nickname,
            userComment: action.comments.comment,
          },
        ],
      };
      const modifyState = [...state];
      modifyState[action.idx] = newState;

      return [...modifyState];

    default:
      return state;
  }
}
