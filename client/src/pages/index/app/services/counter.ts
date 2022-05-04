import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {nanoid} from 'nanoid'
import type { RootState } from '../store'

interface ISearch {
    name: string
}

// Define a service using a base URL and expected endpoints
export const searchApi = createApi({
  reducerPath: 'searchApi',
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
    getSearchByName: builder.query<ISearch, string>({
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

export const { useGetSearchByNameQuery } = searchApi