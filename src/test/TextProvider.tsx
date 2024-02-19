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
  // const [resource, setResource] = useState<[]>();
  // const [apiResponse, setApiResponse] = useState<string>();
  const TEXT_MUTATIONS: Mutations = {
    GET: () => getResource(),
    DELETE: () => deleteResource(1),
    PATCH: () => patchResource({ id: 1, title: "yeah" }),
    POST: () =>
      postResource({
        title: "string",
        body: "string",
        userId: 1,
      }),
    PUT: () =>
      putResource({
        id: 1,
        title: "string",
        body: "string",
        userId: 1,
      }),
  };
  // const TEXT_OPTIONS: Options = {
  //   // la data que se necesita para la request
  //   GET: {},
  //   DELETE: {},
  //   PATCH: {},
  //   POST: {},
  //   PUT: {},
  // };
  const { isLoading, error, data, handleMutation } = useDataMutation(
    API_URL,
    TEXT_MUTATIONS
    // TEXT_OPTIONS
  );

  const handleGet = async () => {
    // const response = await getResource();
    handleMutation("GET");
    // setResource(data);
  };

  const handleDelete = async () => {
    handleMutation("DELETE");
    // setApiResponse(status === 200 ? "Se eliminó correctamente" : "Algo falló");
  };

  const handlePatch = async () => {
    handleMutation("PATCH", { id: 1, title: "yeah" });
    // setApiResponse(status === 200 ? "Se modificó correctamente" : "Algo falló");
  };

  const handlePost = async () => {
    handleMutation("POST", {
      title: "string",
      body: "string",
      userId: 1,
    });
    // setApiResponse(status === 201 ? "Se creó correctamente" : "Algo falló");
  };

  const handlePut = async () => {
    handleMutation("PUT", {
      id: 1,
      title: "string",
      body: "string",
      userId: 1,
    });
    // setApiResponse(status === 200 ? "Se modificó correctamente" : "Algo falló");
  };
  return (
    <TextContext.Provider
      value={{
        isLoading,
        error,
        data,
        handleGet,
        handlePut,
        handlePatch,
        handlePost,
        handleDelete,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};
