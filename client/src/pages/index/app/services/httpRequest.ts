import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { nanoid } from "nanoid";
import type { RootState } from "../store";

interface IGET {
  [index: string]: any;
}

const init = {
  reducerPath: "@redux/init",
  baseUrl: "/",
  method: "GET",
  query: {},
};

function getRequest(args = init) {
  const { reducerPath, baseUrl, method, query } = args;
  return createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
      baseUrl,
      prepareHeaders: (headers, { getState }) => {
        headers.set("requestId", `${nanoid()}`);
        const token = getState() as RootState;

        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getSearchByName: builder.query<IGET, string>({
        query: (name) => ({
          url: `${name}`,
          method,
          headers: {
            "content-type": "text/plain",
          },
          params: query,
        }),
      }),
    }),
  });
}

export const { useGetSearchByNameQuery } = searchApi;
