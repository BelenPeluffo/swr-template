import { createContext } from "react";
import { Resource } from "./TextProvider";

export interface Textstate {
  isFetchSlow: boolean;
  data: Resource[] | undefined;
  handleDelete: (data) => Promise<void>;
  handlePatch: (data) => Promise<void>;
  handlePost: (data) => Promise<void>;
  handlePut: (data) => Promise<void>;
  isLoading: boolean;
  error: any;
}

export const TextContext = createContext<Textstate>({
  data: undefined,
  handleDelete: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  handlePatch: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  handlePost: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  handlePut: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  isLoading: false,
  error: undefined,
  isFetchSlow: false
});
