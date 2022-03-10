import { combineReducers } from 'redux';
import reviews from './reviews';
import viewQuantity from './viewQuantity';
//! 한프로젝트에 리듀서가 여러개일경우 한 리듀서로 합쳐사용한다.
//! 합쳐진 리듀서를 루트 리듀서라고 부른다.

const rootReducer = combineReducers({ viewQuantity, reviews });

export default rootReducer;

//store 생성은 src/index.js에서
