import { useQuery } from "@tanstack/react-query";

const URL = "https://jsonplaceholder.typicode.com/photos";

const getPosts = async () => {
  const response = await fetch(URL);
  return response.json();
};

export const usePosts = () => {
  return useQuery(["posts"], getPosts);
};
