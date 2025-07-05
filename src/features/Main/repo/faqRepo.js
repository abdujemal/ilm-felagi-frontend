import { faqUrl } from "../../../common/consts.js";

export const getFaq = async () => {
    const res = await fetch(faqUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
    },},)

    if (!res.ok) {
            throw new Error("Network response was not ok");
    }

    return res.json();
}