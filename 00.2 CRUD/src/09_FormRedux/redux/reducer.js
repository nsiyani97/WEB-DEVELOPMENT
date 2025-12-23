import { add_user, add_user_to_data, delete_user, edit_user, update_user } from "./action";

// 1. initialize state and it's properties
const initialState = {
  data: [],
  userData: {
    id: "",
    name: "",
    tel: "",
    email: "",
  },
  editId: null,
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
    case edit_user:
      return {
        ...state,
        editId: (state.data = action.payload),
      };
    case update_user:
      return {
        ...state,
        data: state.data.map((item) => (item.id === action.payload.id ? action.payload : item)),
        userData: { name: "", tel: "", email: "" }, // reset form
        editId: null,
      };
    case delete_user:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
