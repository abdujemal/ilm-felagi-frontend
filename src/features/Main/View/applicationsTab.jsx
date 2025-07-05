import React, { useEffect } from 'react'

const ApplicationsTab = () => {
  useEffect(()=>{
    document.title = "አፕልኬሽኖች"
  })

  const apps = [
    {
      alt: "Get it on Google Play",
      url: "https://play.google.com/store/apps/details?id=com.aj.islamic_online_learning",
      src: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
    }, 
    
  ]

  return (
    <div>
      <h1 className='text-2xl'>አፕልኬሽኖች</h1>
      <div className=' flex bg-card pt-10 md:p-10 justify-evenly'>
            <div className='bg-card-light p-10 md:p-24 gap-2 rounded-2xl shadow-lg flex flex-col items-center justify-center dark:bg-card-dark'>
              <div className='p-4 rounded-full border'>
                <img
                  src="/app_logo.jpg"
                  alt="Logo"
                  className="w-52 h-52 rounded-full object-cover"
                />
              </div>
              <p className='text-gray-400'>Version 1.0.1 </p>
              <h3 className='text-2xl'>ዒልም ፈላጊ</h3>
              
              {
                apps.map((app, i) => 
                  app.url ?
                  <a
                    key={i}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={app.src}
                      alt={app.alt}
                      className="h-24"
                    />
                  </a>
                  : <img
                      key={i}
                      src={app.src}
                      alt={app.alt}
                      className="h-24"
                    />
                  )
              }
              {/* {
                !app.url ? <p className='text-gray-400'>Coming Soon</p> : <p></p>
              } */}
            </div>
          
      </div>
    </div>
  )
}

export default ApplicationsTab
