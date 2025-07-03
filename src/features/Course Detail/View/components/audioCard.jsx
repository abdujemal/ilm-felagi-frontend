import { IconDotsVertical, IconDownload, IconPlayerPauseFilled, IconPlayerPlayFilled, IconShare } from '@tabler/icons-react'
import React from 'react'
import Button from '../../../Main/View/Components/button'
import { Link } from 'react-router-dom'
import { useAudio } from '../../../AudioPlayer/Controller/audioContext'

const AudioCard = ({title, ustaz, index, url, onTap, isPlaying, isActive}) => {
    const { tooglePlayingState } = useAudio()

  return (
    <div  className={`${isActive ? "bg-gray-300 dark:bg-gray-600": ""} rounded-md flex items-center gap-2 p-2 border-gray-300 dark:border-gray-500 border-b`}>
        <div onClick={()=>{
            if(isActive){
                tooglePlayingState(!isPlaying)
            }else{
                onTap();
            }
            }} className=' cursor-pointer p-3 rounded-full bg-primary-light dark:bg-primary-dark'>
            {
                isPlaying && isActive?
                <IconPlayerPauseFilled className='w-7 h-7 text-white'/>:
                <IconPlayerPlayFilled className='w-7 h-7 text-white'/>
            }
        </div>
        <div className='flex-1'>
            <p className='text-lg'>{title}</p>
            <p className='text-nav-light dark:text-nav-dark'>በ{ustaz}</p>
        </div>
        {/* <IconDotsVertical/> */}
        <a href={url} target="_blank" download>
            <Button
                icon={<IconDownload className=' cursor-pointer'/>}
                onClick={()=>{}}
            />
        </a>

        <Button
            icon={<IconShare className=' cursor-pointer'/>}
            onClick={() => {
                navigator.clipboard.writeText(url);
            }}
        />
    </div>
  )
}

export default AudioCard
