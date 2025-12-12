export const add_user = "add_user";
export const add_user_to_data = "add_user_to_data";

// send action type to reducer in strings
// pass user parameter to reducer
export const newUser = (user) => {
  return {
    type: add_user,
    payload: user,
  };
};

export const allUser = (user) => {
  return {
    type: add_user_to_data,
    payload: user,
  };
};
