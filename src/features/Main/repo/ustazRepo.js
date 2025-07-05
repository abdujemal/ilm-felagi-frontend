import { ustazUrl } from "../../../common/consts";

export const getUstazs = async () =>{
     const res = await fetch(ustazUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
    },},)

    if (!res.ok) {
            throw new Error("Network response was not ok");
    }

    return res.json();
}