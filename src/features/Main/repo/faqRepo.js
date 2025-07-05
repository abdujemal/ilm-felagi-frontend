import { faqUrl } from "../../../common/consts.js";
import { MyApi } from "../../../common/repo.js";

export const getFaq = async () => {
    const res = await MyApi(faqUrl)

    if (!res.ok) {
            throw new Error("Network response was not ok");
    }

    return res.json();
}