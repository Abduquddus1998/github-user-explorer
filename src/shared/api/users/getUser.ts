import { api } from "../api-instance";
import { User } from "../types";

export const getUserDto = async (username: string): Promise<User> => {
  const response = await api.get<User>(
    `/users/${encodeURIComponent(username)}`,
  );

  return response.data;
};
