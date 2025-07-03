import { useEffect } from "react";

export default function About() {
  useEffect(()=>{
    document.title = "ስለ እኛ"
  })
  return <div className="p-4">📖 About Page</div>;
}
