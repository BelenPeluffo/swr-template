import useSWR, { SWRConfiguration } from 'swr';

export type Mutation = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';

export interface Mutations {
  GET: <T>(data) => T;
  DELETE: (data) => void;
  PATCH: (data) => void;
  POST: (data) => void;
  PUT: (data) => void;
}

export const useDataMutation = <ResponseType>(
  url: string,
  mutationMethods: Mutations,
  mutationOptions?: SWRConfiguration,
) => {
  const { GET, ...updateMethods } = mutationMethods;
  const { isLoading, error, mutate, data } = useSWR(url, GET, mutationOptions);

  const handleMutation = (mutationType: Mutation, newInput?) => {
    try {
      mutate(updateMethods[mutationType](newInput), mutationOptions[mutationType](newInput));
      // Acá iría un toast o cualquier medio para comunicarle al user que se actualizó la data
    } catch (err) {
      // Acá iría un toast o cualquier medio para comunicarle al user que se actualizó la data
    }
  };

  return {
    isLoading,
    error,
    data,
    handleMutation,
  };
};
