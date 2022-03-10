const ADD_SUBMIT_DATA = 'submit/ADD_SUBMIT_DATA';
const INIT_SUBMIT_DATA = 'submit/INIT_SUBMIT_DATA';

let count = 0;

export const addSubmitData = (key, value) => ({
  type: ADD_SUBMIT_DATA,
  key,
  value,
});

export const initSubmitData = (key, value) => ({ type: INIT_SUBMIT_DATA });

const initialState = [
  {
    id: null,
    imgUrl: null,
    rating: null,
    title: null,
    content: null,
    date: null, // 등록시 생성, 더미는 랜덤 date
    likes: null, // boolean
    reviewCount: null, // 더미생성시 랜덤
  },
];

export default function submit(state = initialState, action) {
  switch (action.type) {
    case ADD_SUBMIT_DATA:
      return {
        ...state,
        [action.key]: action.value,
      };
    case INIT_SUBMIT_DATA:
      return {};
    default:
      return state;
  }
}
