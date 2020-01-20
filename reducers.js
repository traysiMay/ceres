import { combineReducers } from "redux";
import { HIDE, SHOW, SEED, FADE_IN, FADE_OUT, LOADING_IMAGES, LOADING_COMPLETE } from "./actions";

const VIEW_STATE = {
  view: false,
  loading: true,
  photos: [],
  previews: []
};

const viewReducer = (state = VIEW_STATE, action) => {
  switch (action.type) {
    case SHOW:
      return { ...state, view: true };
    case HIDE:
      return { ...state, view: false };
    case SEED:
      return { ...state, photos: [...action.photos], previews: [...action.previews] };
    case LOADING_IMAGES:
      return { ...state, loading: true };
    case LOADING_COMPLETE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

const UI_STATE = {
  header: 1
};

const uiReducer = (state = UI_STATE, action) => {
  switch (action.type) {
    case FADE_IN:
      return { ...state, header: 1 };
    case FADE_OUT:
      return { ...state, header: 0 };
    default:
      return state;
  }
};

export default combineReducers({
  view: viewReducer,
  ui: uiReducer
});
