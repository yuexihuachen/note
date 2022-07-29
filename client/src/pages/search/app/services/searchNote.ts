import { createApi, fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react'
import {nanoid} from 'nanoid'
import type { RootState } from '../store'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

interface IResult {
    data: Array<any>
    message: string
}

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

  const featchBaseQuery = fetchBaseQuery({ 
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('requestId', `${nanoid()}`)
      const token = (getState() as RootState)

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  })

  console.log(featchBaseQuery)

// Define a service using a base URL and expected endpoints
export const searchNoteApi = createApi({
  reducerPath: 'searchNote',
  baseQuery: axiosBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getSearchByName: builder.query<IResult, any>({
      query: ({name, body}) => ({
        url: `${name}`,
        method: 'POST',
        headers: {
            'content-type': 'text/plain',
        },
        body
      }),
    }),
  }),
})

export const { useGetSearchByNameQuery } = searchNoteApi
