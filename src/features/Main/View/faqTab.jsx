import React, { useEffect } from 'react'
import Loading from './Components/Loading'
import { useQuery } from '@tanstack/react-query'
import { getFaq } from '../repo/faqRepo'
import { IconCornerDownRight } from '@tabler/icons-react'

const FaqTab = () => {
  useEffect(()=>{
    document.title = "FAQ"
  })

  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["faq"],
    queryFn: getFaq,
    keepPreviousData: true,
  })

  return (
    <div className="p-4 flex flex-col h-screen">
      <div className="flex-1 ">
        <h1 className="text-2xl font-bold pb-2">FQA</h1>
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
              <div className="grid grid-cols-1 gap-6 p-4">
                {data.map((ustaz, i)  => (
                  <div key={i} className='p-3 cursor-pointer hover:underline hover:text-primary-light hover:dark:text-primary-dark border-card-light dark:border-card-dark flex flex-col justify-start gap-2 items-start rounded-md bg-card-light dark:bg-card-dark shadow-md'>
                    {/* <IconChalkboardTeacher/> */}
                    <p className='text-xl'>{ustaz.question}</p>
                    <div className='flex gap-2'>
                      <IconCornerDownRight/>
                      <p>{ustaz.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
          )}
      </div>
    </div>
  )
}

export default FaqTab