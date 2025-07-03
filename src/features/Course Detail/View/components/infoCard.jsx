import React from 'react'
import Button from "../../../Main/View/Components/button.jsx"

const InfoCard = ({keey, val, icon, isPdf = false, onTap}) => {
  return (
    <div className='flex flex-col  gap-2 p-4'>
      <p className='text-xl'>{keey}</p>
        <div className='flex items-center gap-2'>
            {icon}
            {val ? isPdf ? <Button text={"ኪታቡን ከፈተው"} onClick={()=>onTap()} isPrimaryColor/> : <p className='text-lg text-gray-700 dark:text-gray-300'>{val}</p> : <p className='text-lg text-gray-700 dark:text-gray-300'>የለም</p>}
        </div>
        
    </div>
  )
}

export default InfoCard
