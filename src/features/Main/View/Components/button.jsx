import React from 'react'

export default function Button({text, onClick, icon, withIcon = false, isPrimaryColor = false, isTransparent = false}) {
  const normalColor = "hover:bg-button-hover-light hover:dark:bg-button-hover-dark bg-button-light dark:bg-button-dark"
  const primaryColor = "border-primary-light dark:border-primary-dark hover:bg-primary-dark hover:dark:bg-primary-light bg-primary-light dark:bg-primary-dark"
  return (
    <div onClick={()=>onClick()} className={`${isTransparent ? "bg-transparent" : isPrimaryColor ? primaryColor : normalColor} ${isPrimaryColor ? "text-text-dark" : ""}  cursor-pointer px-2 md:px-4 py-2 rounded  transition duration-200`}>
        {!withIcon ?  icon ? icon : text: ""}
        {withIcon ? <span className="flex items-center gap-2">
            {icon ? icon : ""}
            {text}
        </span> : ""}
    </div>
    
  )
}
