import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "2aedc3992fmsha45c49f896d0df6p13a17fjsn99d2a9588b86"
      );
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => `/charts/world` }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
