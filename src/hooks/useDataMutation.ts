import useSWR, { SWRConfiguration, mutate as globalMutate } from "swr";
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
  const { isLoading, error, data, mutate } = useSWR<ResponseType[]>(
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

  const handleMutation = async (
    mutationType: Mutation,
    newInput,
    anotherEndpoint?: string
  ) => {
    console.log(`mutationMethods[${mutationType}]`);
    anotherEndpoint
      ? await globalMutate(
          anotherEndpoint,
          mutationMethods[mutationType](newInput) as Promise<ResponseType[]>
        )
      : await mutate(
          mutationMethods[mutationType](newInput) as Promise<ResponseType[]>
        );
  };

  return {
    isLoading,
    error,
    data,
    handleMutation,
    isFetchSlow,
  };
};
