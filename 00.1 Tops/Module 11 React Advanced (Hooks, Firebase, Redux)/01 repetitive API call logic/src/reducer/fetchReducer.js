export const initialState = {
  loading: false,
  data: [],
  error: null,
};

export function fetchReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: null };

    case "FETCH_ERROR":
      return { loading: false, data: [], error: action.payload };

    default:
      return state;
  }
}
