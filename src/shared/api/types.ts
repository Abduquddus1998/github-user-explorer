export type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  bio?: string;
  followers: number;
  following: number;
  public_repos: number;
};

export type UserSearchResponse = {
  total_count: number;
  items: User[];
};
