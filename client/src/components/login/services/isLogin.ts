import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {nanoid} from 'nanoid'

interface IisLogin {
    data: any
    message: string
}

// Define a service using a base URL and expected endpoints
export const isLoginApi = createApi({
  reducerPath: 'isLogin',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('requestId', `${nanoid()}`)
      const token = getState()

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getIsLoginByName: builder.query<IisLogin, string>({
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

export const { useGetIsLoginByNameQuery } = isLoginApi