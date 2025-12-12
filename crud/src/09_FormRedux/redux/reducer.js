import { add_user, add_user_to_data } from "./action";

// 1. initialize state and it's properties
const initialState = {
  data: [],
  userData: {
    id: "",
    name: "",
    tel: "",
    email: "",
  },
};

// 2. export slice function to reducer
// 3. pass initialized state to function
// 4. pass action parameter from redux and pass payload from action.
export const form = (state = initialState, action) => {
  switch (action.type) {
    case add_user:
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
      };
    case add_user_to_data:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};
