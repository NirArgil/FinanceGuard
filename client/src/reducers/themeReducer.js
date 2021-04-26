import { TOGGLE_DARK_MODE } from "../types/themeTypes";
  
  export const themeReducer = (
    state = { darkMode: false },
    action
  ) => {
    switch (action.type) {
      case TOGGLE_DARK_MODE:
        return {
          ...state,
          darkMode: !state.darkMode,
        };
      default:
        return state;
    }
  };