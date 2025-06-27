import React from 'react'
import Button from './button'
import { IconSearch } from '@tabler/icons-react'


function SearchUI() {
  return (
    <form className="relative  md:ml-16  min-w-72 ">
    {/* Input */}
        <input
            type="text"
            placeholder="ፈልግ..."
            className="w-full p-2 pr-10 bg-input_bg-light dark:bg-input_bg-dark border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-primary-light dark:focus:ring-primary-dark"
        />

        {/* Button floating on top-right */}
        <div className="absolute inset-y-0 right-0 flex items-center">
            <Button isTransparent icon={<IconSearch />} className="p-1" />
        </div>
    </form>

            
  )
}
export default SearchUI
