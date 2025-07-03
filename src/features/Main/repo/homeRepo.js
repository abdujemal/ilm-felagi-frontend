import { mainUrl, PAGE_SIZE } from "../../../consts.js";

export const getCourses = async ({queryKey}) => {
    console.log("getCourses called with queryKey:", queryKey);
    
    const [_key, page] = queryKey;
    const res = await fetch(`${mainUrl}?page=${page}&limit=${PAGE_SIZE}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },},);

   if (!res.ok) {
          throw new Error("Network response was not ok");
    }

    return res.json();
}