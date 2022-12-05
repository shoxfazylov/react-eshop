import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {alibazarApi} from "./api/alibazar.api";

export const store = configureStore({
  reducer: {
    [alibazarApi.reducerPath]: alibazarApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(alibazarApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
