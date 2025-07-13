import React, { useEffect, useState } from 'react'
import Button from './button'
import { IconSearch } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import { useUrl } from '../../../../common/consts'


function SearchUI() {

  const q = useUrl()

  const [query, setQuery] = useState("")

  useEffect(()=>{
    if(q.get("q")){
      setQuery(q.get("q"))
    }
  },[])

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${e.target[0].value}`)    
  }


  return (
    <form className="relative  md:ml-16 min-w-72" onSubmit={handleSubmit}>
    {/* Input */}
        <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            name='q'
            type="text"
            placeholder="ፈልግ..."
            className="w-full p-2 pr-10 bg-button-light dark:bg-button-dark border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-primary-light dark:focus:ring-primary-dark"
        />

        {/* Button floating on top-right */}
        <div className="absolute inset-y-0 right-0 flex items-center">
            <Button onClick={()=>navigate(`/search?q=${query}`)} isTransparent icon={<IconSearch />} className="p-1" />
        </div>
    </form>

            
  )
}
export default SearchUI
