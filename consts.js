import { useLocation } from "react-router-dom";

// urls
export const mainUrl = "http://localhost:3000/api/v1/courses";

// glabal constants
export const PAGE_SIZE = 20;

export const useQuery = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
}