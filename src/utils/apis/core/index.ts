import { api } from "../base";

export const getData = async <T>(url: string): Promise<T> => {
  const response = await api.get(url);
  return response.json();
};
