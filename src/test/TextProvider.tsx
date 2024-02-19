import { ReactNode, useState } from "react";
import { TextContext } from "./TextContext";
import {
  API_URL,
  // deleteResource,
  getResource,
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
    DELETE: function (data: any): void {
      throw new Error("Function not implemented.");
    },
    PATCH: function (data: any): void {
      throw new Error("Function not implemented.");
    },
    POST: function (data: any): void {
      throw new Error("Function not implemented.");
    },
    PUT: function (data: any): void {
      throw new Error("Function not implemented.");
    }
  };
  const { isFetchSlow, isLoading, error, data } = useDataMutation(
    API_URL,
    TEXT_MUTATIONS
  );

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
        // handlePut,
        // handlePatch,
        // handlePost,
        // handleDelete,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};
