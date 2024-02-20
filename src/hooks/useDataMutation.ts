import useSWR, { SWRConfiguration } from "swr";
import { useState } from "react";

export type Mutation = "DELETE" | "GET" | "PATCH" | "POST" | "PUT";

export interface Mutations<ResponseType> {
  GET: (data) => Promise<ResponseType[]>;
  DELETE: (data) => Promise<ResponseType>;
  PATCH: (data) => Promise<ResponseType>;
  POST: (data) => Promise<ResponseType>;
  PUT: (data) => Promise<ResponseType>;
}

export const useDataMutation = <ResponseType>(
  url: string,
  mutationMethods: Mutations<ResponseType>,
  mutationOptions?: SWRConfiguration
) => {
  const [isFetchSlow, setIsFetchSlow] = useState(false);
  const { isLoading, error, data, mutate } = useSWR(
    url,
    mutationMethods.GET,
    mutationOptions ?? {
      loadingTimeout: 1500,
      errorRetryCount: 3,
      revalidateOnReconnect: true,
      revalidateOnFocus: true,
      onLoadingSlow: () => {
        console.log("Ta lenta la cosa");
        setIsFetchSlow(true);
      },
    }
  );

  const handleMutation = async (mutationType: Mutation, newInput?) => {
    console.log(`mutationMethods[${mutationType}]`);
    await mutate(mutationMethods[mutationType](newInput));
  };

  return {
    isLoading,
    error,
    data,
    handleMutation,
    isFetchSlow,
    mutate,
  };
};
