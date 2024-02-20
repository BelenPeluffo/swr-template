import useSWR, { SWRConfiguration } from 'swr';
import { useState } from 'react';

export type Mutation = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';

export interface Mutations {
  GET: (data) => void;
  DELETE: (data) => void;
  PATCH: (data) => void;
  POST: (data) => void;
  PUT: (data) => void;
}

export const useDataMutation = (
  url: string,
  mutationMethods: Mutations,
  mutationOptions?: SWRConfiguration,
) => {
  const [isFetchSlow, setIsFetchSlow] = useState(false);
  const { isLoading, error, data, mutate } = useSWR(url, mutationMethods.GET, {
    loadingTimeout: 1500,
    errorRetryCount: 3,
    revalidateOnReconnect: true,
    revalidateOnFocus: true,
    onLoadingSlow: () => {
      console.log("Ta lenta la cosa");
      setIsFetchSlow(true);
    },
  });

  const handleMutation = async (mutationType: Mutation, newInput?) => {
    console.log(`mutationMethods[${mutationType}]`);
    await mutate(mutationMethods[mutationType](newInput));
  }

  return {
    isLoading,
    error,
    data,
    handleMutation,
    isFetchSlow,
    mutate
  };
};
