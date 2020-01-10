import { CHIMP_URL, ALL_END } from "./constants";

export const SHOW = "SHOW";
export const HIDE = "HIDE";
export const SEED = "SEED";

export const FADE_IN = "FADE_IN";
export const FADE_OUT = "FADE_OUT";

export const fetchPhotos = () => {
  return async function(dispatch) {
    const resp = await fetch(`${CHIMP_URL}/${ALL_END}`);
    const data = await resp.json();
    dispatch({ type: SEED, data });
  };
};
