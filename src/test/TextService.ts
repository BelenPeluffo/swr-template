import axios from "axios";
import { Resource } from "./TextProvider";

export const API_URL = "https://jsonplaceholder.typicode.com/posts";
const HEADERS = {
  "Content-type": "application/json; charset=UTF-8",
};
export const getResource = async () => {
  // Prueba con delay
  // return new Promise(() => {
  //   setTimeout(async () => {
  //     // console.log("is it even happening?");
  //     // const response = await axios.get(API_URL);
  //     // return response.data as Array<Resource>;
  //     // Error con delay
  //     throw new Error('Uh-oh');
  //   }, 4000);
  // });

  const response = await axios.get(API_URL);
  return response.data as Array<Resource>;
};

export const deleteResource = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response;
};

export const patchResource = async (body: { id: number; title: string }) => {
  const { id, ...rest } = body;
  const response = await axios.patch(`${API_URL}/${id}`, rest, {
    headers: HEADERS,
  });
  return response;
};

export const postResource = async (body: {
  title: string;
  body: string;
  userId: number;
}) => {
  const response = await axios.post(API_URL, body, { headers: HEADERS });
  return response;
};

export const putResource = async (body: {
  id: number;
  title: string;
  body: string;
  userId: number;
}) => {
  const { id, ...rest } = body;
  const response = await axios.put(`${API_URL}/${id}`, rest, {
    headers: HEADERS,
  });
  return response;
};
