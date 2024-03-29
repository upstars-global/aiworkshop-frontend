// src/api/todoApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://b6f6001008cb.ngrok.app/' }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => 'tasks',
        }),
        getTask: builder.query({
            query: (id) => `tasks/${id}`,
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: 'tasks',
                method: 'POST',
                body: task,
            }),
        }),
        updateTask: builder.mutation({
            query: ({ id, ...task }) => ({
                url: `tasks/${id}`,
                method: 'PUT',
                body: task,
            }),
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}`,
                method: 'DELETE',
            }),
        }),
        checkTask: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}/check`,
                method: 'PUT',
            }),
        }),
        uncheckTask: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}/uncheck`,
                method: 'PUT',
            }),
        }),
    }),
});

export const {
    useGetTasksQuery,
    useGetTaskQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useCheckTaskMutation,
    useUncheckTaskMutation,
} = todoApi;

export default todoApi;
