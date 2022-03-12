const SELECT_ALL = 'sort/SELECT_ALL';
const SELECT_RECENT = 'sort/SELECT_RECENT';
const SELECT_CNT = 'sort/SELECT_CNT';

export const selectAll = () => ({
  type: SELECT_ALL,
});

export const selectRecent = () => ({
  type: SELECT_RECENT,
});

export const selectCnt = () => ({
  type: SELECT_CNT,
});

const initialState = 0;

export default function sort(state = initialState, action) {
  switch (action.type) {
    case SELECT_ALL:
      return 0;
    case SELECT_RECENT:
      return 1;
    case SELECT_CNT:
      return 2;
    default:
      return state;
  }
}
