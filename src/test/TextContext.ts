import { createContext } from "react";
import { Resource } from "./TextProvider";

export interface Textstate {
  isFetchSlow: boolean;
  data: Resource[] | undefined;
  //   apiResponse: string | undefined;
  handleGet: () => Promise<void>;
  handleDelete: () => Promise<void>;
  handlePatch: () => Promise<void>;
  handlePost: () => Promise<void>;
  handlePut: () => Promise<void>;
  isLoading: boolean;
  error: any;
}

export const TextContext = createContext<Textstate>({
  data: undefined,
  // apiResponse: undefined,
  handleGet: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
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
});
