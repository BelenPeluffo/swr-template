import { createContext } from "react";
import { Resource } from "./TextProvider";

export interface Textstate {
  isFetchSlow: boolean;
  data: Resource[] | undefined;
  handleDelete: (data) => Promise<Resource>;
  handlePatch: (data) => Promise<Resource>;
  handlePost: (data) => Promise<Resource>;
  handlePut: (data) => Promise<Resource>;
  isLoading: boolean;
  error: any;
}

export const TextContext = createContext<Textstate>({
  data: undefined,
  handleDelete: function (): Promise<Resource> {
    throw new Error("Function not implemented.");
  },
  handlePatch: function (): Promise<Resource> {
    throw new Error("Function not implemented.");
  },
  handlePost: function (): Promise<Resource> {
    throw new Error("Function not implemented.");
  },
  handlePut: function (): Promise<Resource> {
    throw new Error("Function not implemented.");
  },
  isLoading: false,
  error: undefined,
  isFetchSlow: false
});
