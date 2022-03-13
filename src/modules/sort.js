const SELECT_RECENT = 'sort/SELECT_RECENT';
const SELECT_CNT = 'sort/SELECT_CNT';
const SELECT_RANDOM = 'sort/SELECT_RANDOM';

export const selectRecent = () => ({
  type: SELECT_RECENT,
});

export const selectCnt = () => ({
  type: SELECT_CNT,
});
export const selectRandom = () => ({
  type: SELECT_RANDOM,
});

const initialState = 0;

export default function sort(state = initialState, action) {
  switch (action.type) {
    case SELECT_RECENT:
      return 0;
    case SELECT_CNT:
      return 1;
    case SELECT_RANDOM:
      return 2;
    default:
      return state;
  }
}
