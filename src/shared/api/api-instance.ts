import axios from "axios";

export const api = axios.create({
  baseURL: process.env.GITHUB_API_BASE || "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "GitHub API Error:",
      error.response?.data?.message || error.message,
    );
    if (error.response?.status === 403) {
      throw new Error("GitHub rate limit exceeded. Try again later.");
    }
    return Promise.reject(error);
  },
);
