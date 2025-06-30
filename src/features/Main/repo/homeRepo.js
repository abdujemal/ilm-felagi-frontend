import { mainUrl, PAGE_SIZE } from "../../../../consts";

export const getCourses = async (page) => {
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