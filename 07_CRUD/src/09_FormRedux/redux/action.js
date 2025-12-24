export const add_user = "add_user";
export const add_user_to_data = "add_user_to_data";
export const edit_user = "edit_user";
export const update_user = "update_user";
export const delete_user = "delete_user";

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

export const editUser = (id) => {
  return {
    type: edit_user,
    payload: id,
  };
};

export const updateUser = (user) => {
  return {
    type: update_user,
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: delete_user,
    payload: id,
  };
};
