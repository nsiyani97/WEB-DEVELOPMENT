import { configureStore } from "@reduxjs/toolkit";

import { form } from "./reducer";

export const store = configureStore({
  reducer: {
    form: form,
  },
});
