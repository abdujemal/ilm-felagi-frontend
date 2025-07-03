import { courseUrl } from "../../../common/consts.js";

export const getSingleCourse = async (id) => {
    const res = await fetch(`${courseUrl}/single/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    return res.json();
}