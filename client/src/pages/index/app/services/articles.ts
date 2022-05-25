import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {nanoid} from 'nanoid'
import { getQueryStringArgs } from '../../../../utils/index'
import type { RootState } from '../store'

const query = getQueryStringArgs()

interface IResult {
    data: Array<any>
    message: string
}

// Define a service using a base URL and expected endpoints
export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('requestId', `${nanoid()}`)
      const token = (getState() as RootState)

      if (token) {
        headers.set('authorization', `Bearer `)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getSearchByName: builder.query<IResult, string>({
      query: (name) => ({
        url: `${name}`,
        method: 'POST',
        body: {
          category: query.cid
        }
      }),
    }),
  }),
})

export const { useGetSearchByNameQuery } = articlesApi