import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const fetchTasks = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_TASKS_REQUEST" });

    try {
      const querySnapshot = await getDocs(collection(db, "tasks"));

      const tasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch({
        type: "FETCH_TASKS_SUCCESS",
        payload: tasks,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_TASKS_FAILURE",
        payload: error.message,
      });
    }
  };
};
