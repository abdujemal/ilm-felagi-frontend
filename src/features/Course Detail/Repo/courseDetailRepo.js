import { courseUrl } from "../../../common/consts.js";
import { MyApi } from "../../../common/repo.js";

export const getSingleCourse = async (id) => {
    
    const res = await MyApi(`${courseUrl}/single/${id}`);

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    return res.json();
}