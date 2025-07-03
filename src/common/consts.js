import { useLocation } from "react-router-dom";

// urls
export const mainUrl = "http://localhost:3000/api/v1";

export const courseUrl = `${mainUrl}/courses`;
export const categoryUrl = `${mainUrl}/categories`;
// result urls
export const courseByCategoryUrl = `${courseUrl}/category`;


// glabal constants
export const PAGE_SIZE = 20;

export const useUrl = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
}
