import React, { useEffect } from 'react'
import Loading from './Components/Loading'
import { useQuery } from '@tanstack/react-query'
import { getUstazs } from "../repo/ustazRepo.js"
import { IconChalkboardTeacher } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

export default function UstazsTab() {
  useEffect(()=>{
    document.title = "ኡስታዞች"
  })

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["ustaz"],
    queryFn:  getUstazs,
    keepPreviousData: true,
  })

  const navigate = useNavigate()

  return (
    <div className="p-4 flex flex-col h-screen">
      <div className="flex-1 ">
        <h1 className="text-2xl font-bold pb-2">ኡስታዞች</h1>
        {
          isLoading ? (
            <div className=" h-3/4 flex items-center justify-center"><Loading/></div>
          ) : 
          isError ? (
            <div className=" h-3/4 flex items-center justify-center text-red-500">{error}</div>
          ) : 
          data.length === 0 ? (
            <div className="h-3/4 flex items-center justify-center text-gray-500">ምንም የሉም</div>
          ) :
          (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {data.map((ustaz, i)  => (
                  <div onClick={()=>navigate(`/result?ustaz=${ustaz.name}`)} key={i} className='p-3 cursor-pointer hover:underline hover:text-primary-light hover:dark:text-primary-dark border-card-light dark:border-card-dark flex gap-2 items-center rounded-md bg-card-light dark:bg-card-dark shadow-md'>
                    <IconChalkboardTeacher/>
                    <p>{ustaz.name}</p>
                  </div>
                ))}
              </div>
          )}
      </div>
    </div>
  )
}
