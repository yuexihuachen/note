import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {nanoid} from 'nanoid'
import type { RootState } from '../store'

interface ICategory {
    data: Array<Object>
    message: string
}

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('requestId', `${nanoid()}`)
      const token = (getState() as RootState)

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getCategoryByName: builder.query<ICategory, string>({
      query: (name) => ({
        url: `${name}`,
        method: 'GET',
        headers: {
            'content-type': 'text/plain',
        },
        params: {name: name}
      }),
    }),
  }),
})

export const { useGetCategoryByNameQuery } = categoryApi