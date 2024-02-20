import { ReactNode } from "react";
import { TextContext } from "./TextContext";
import {
  API_URL,
  deleteResource,
  getResource,
  patchResource,
  postResource,
  putResource,
} from "./TextService";
import { Mutations, useDataMutation } from "../hooks/useDataMutation";

export interface Resource {
  id: number;
  title: string;
  body: string;
}

export const TextContextProvider = ({ children }: { children: ReactNode }) => {
  const TEXT_MUTATIONS: Mutations<Resource> = {
    GET: getResource,
    DELETE: deleteResource,
    PATCH: patchResource,
    POST: postResource,
    PUT: putResource,
  };
  const { isFetchSlow, isLoading, error, data, handleMutation } =
    useDataMutation<Resource>(API_URL, TEXT_MUTATIONS);

  return (
    <TextContext.Provider
      value={{
        isFetchSlow,
        isLoading,
        error,
        data,
        handlePut: (body) => handleMutation("PUT", body),
        handlePatch: (body) => handleMutation("PATCH", body),
        handlePost: (body) => handleMutation("POST", body),
        handleDelete: (id) => handleMutation("DELETE", id),
      }}
    >
      {children}
    </TextContext.Provider>
  );
};
