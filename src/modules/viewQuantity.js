const ADD_VIEW_QUANTITY = 'viewQuantity/ADD_VIEW_QUANTITY';
const INIT_VIEW_QUANTITY = 'viewQuantity/INIT_VIEW_QUANTITY';

export const addViewQuantity = () => ({ type: ADD_VIEW_QUANTITY });
export const initViewQuantity = () => ({ type: INIT_VIEW_QUANTITY });

const initialState = { quantity: 29 };

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
    default:
      return state;
  }
}
