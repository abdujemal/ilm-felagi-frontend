import { useEffect } from "react";
import { aboutUsMsg } from "../../../common/consts.js";

export default function About() {
  useEffect(()=>{
    document.title = "ስለ እኛ"
  })

  return <div className="p-4 flex flex-col h-screen">
      <div className="flex-1 ">
        <h1 className="text-2xl font-bold pb-2">ስለ እኛ</h1>
        <pre className="text-lg text-gray-900 dark:text-white p-4 rounded whitespace-pre-wrap">
          {aboutUsMsg}
        </pre>
      </div>
    </div>
}
