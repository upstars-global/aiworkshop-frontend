import { configureStore } from '@reduxjs/toolkit';
import todoApi from '../api/todoApi';

export const store = configureStore({
    reducer: {
        // Добавьте API редьюсер
        [todoApi.reducerPath]: todoApi.reducer,
    },
    // Добавьте API middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
});
