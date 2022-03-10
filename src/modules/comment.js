const ADD_NICKNAME_DATA = 'comment/ADD_NICKNAME_DATA';
const ADD_COMMENT_DATA = 'comment/ADD_SUBMIT_DATA';

export const setAddNickname = (state) => ({
  type: ADD_NICKNAME_DATA,
});
export const setAddComment = (state) => ({
  type: ADD_COMMENT_DATA,
});

const initialState = {
  userNickname: null,
  userComment: null,
};

export default function comment(state = initialState, action) {
  switch (action.type) {
    case ADD_NICKNAME_DATA:
      return {
        ...state,
        userNickName: action.userNickname,
      };
    case ADD_COMMENT_DATA:
      return {
        ...state,
        userComment: action.userComment,
      };
    default:
      return state;
  }
}
