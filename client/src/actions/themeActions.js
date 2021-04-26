import { TOGGLE_DARK_MODE } from "../types/themeTypes";

export const toggleDarkMode = () => (dispatch, getState) => {
  dispatch({ type: TOGGLE_DARK_MODE });
  localStorage.setItem("theme", JSON.stringify(getState().theme));
};