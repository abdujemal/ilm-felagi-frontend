import { ustazUrl } from "../../../common/consts";
import { MyApi } from "../../../common/repo.js";

export const getUstazs = async () =>{
     const res = await MyApi(ustazUrl)

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    return res.json();
}