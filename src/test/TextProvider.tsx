import { ReactNode, useState } from "react";
import { TextContext } from "./TextContext";
import {
  API_URL,
  deleteResource,
  // deleteResource,
  getResource,
  patchResource,
  postResource,
  putResource,
  //   patchResource,
  //   postResource,
  //   putResource,
} from "./TextService";
// import { Mutations, useDataMutation } from "../hooks/useDataMutation";
import useSWR from "swr";
import { Mutations, useDataMutation } from "../hooks/useDataMutation";

export interface Resource {
  id: number;
  title: string;
  body: string;
}

export const TextContextProvider = ({ children }: { children: ReactNode }) => {
  const TEXT_MUTATIONS: Mutations = {
    GET: getResource,
    DELETE: deleteResource,
    PATCH: patchResource,
    POST: postResource,
    PUT: putResource,
  };
  const { isFetchSlow, isLoading, error, data, handleMutation } =
    useDataMutation(API_URL, TEXT_MUTATIONS);

  // const handleGet = async () => {
  //   // const response = await getResource();
  //   // handleMutation("GET");
  //   // setResource(data);
  // };

  // const handleDelete = async () => {
  //   // handleMutation("DELETE");
  //   // setApiResponse(status === 200 ? "Se eliminó correctamente" : "Algo falló");
  // };

  // const handlePatch = async () => {
  //   // handleMutation("PATCH", { id: 1, title: "yeah" });
  //   // setApiResponse(status === 200 ? "Se modificó correctamente" : "Algo falló");
  // };

  // const handlePost = async () => {
  //   // handleMutation("POST", {
  //   // title: "string",
  //   // body: "string",
  //   // userId: 1,
  //   // });
  //   // setApiResponse(status === 201 ? "Se creó correctamente" : "Algo falló");
  // };

  // const handlePut = async () => {
  //   // handleMutation("PUT", {
  //   // id: 1,
  //   // title: "string",
  //   // body: "string",
  //   // userId: 1,
  //   // });
  //   // setApiResponse(status === 200 ? "Se modificó correctamente" : "Algo falló");
  // };
  return (
    <TextContext.Provider
      value={{
        isFetchSlow,
        isLoading,
        error,
        data,
        // handleGet,
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
