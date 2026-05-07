import { api } from "../api-instance";
import { UserSearchResponse } from "../types";

export const getPopularUsersDto = async () => {
  const response = await api.get<UserSearchResponse>("/search/users", {
    params: {
      q: "type:user sort:followers-desc",
      per_page: 10,
    },
  });

  return response.data.items;
};
