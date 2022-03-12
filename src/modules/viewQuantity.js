const ADD_VIEW_QUANTITY = 'viewQuantity/ADD_VIEW_QUANTITY';
const INIT_VIEW_QUANTITY = 'viewQuantity/INIT_VIEW_QUANTITY';
const SET_START_INDEX = 'viewQuantity/SET_START_INDEX';
const SET_SHOW_DETAIL_VIEW = 'viewQuantity/SET_SHOW_DETAIL_VIEW';
const SET_SHOW_MOVE_TO_TOP_BTN = 'viewQuantity/SHOW_MOVE_TO_TOP_BTN';

export const addViewQuantity = () => ({ type: ADD_VIEW_QUANTITY });
export const initViewQuantity = () => ({ type: INIT_VIEW_QUANTITY });
export const setStartIndex = (idx) => ({ type: SET_START_INDEX, idx });
export const setShowDetailView = () => ({ type: SET_SHOW_DETAIL_VIEW });
export const setShowMoveToTopBtn = (state) => ({
  type: SET_SHOW_MOVE_TO_TOP_BTN,
  state,
});

const initialState = {
  quantity: 29,
  startIdx: 0,
  showDetailView: false,
  showMoveToTopBtn: false,
};

export default function viewQuantity(state = initialState, action) {
  switch (action.type) {
    case ADD_VIEW_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 15,
      };

    case INIT_VIEW_QUANTITY:
      return {
        ...state,
        quantity: 30,
      };

    case SET_START_INDEX:
      return {
        ...state,
        startIdx: action.idx,
      };
    case SET_SHOW_DETAIL_VIEW:
      return {
        ...state,
        showDetailView: !state.showDetailView,
      };
    case SET_SHOW_MOVE_TO_TOP_BTN:
      return {
        ...state,
        showMoveToTopBtn: action.state,
      };
    default:
      return state;
  }
}
