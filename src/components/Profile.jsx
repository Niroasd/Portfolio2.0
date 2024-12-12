import React from 'react'
import hello2 from '../assets/hello2.jpg'

const Profile = () => {
  return (
    <>
      <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
        <div className='flex flex-col items-center justify-center gap-10 text-white'>
          <div>
            <img src={hello2} className='w-[300px] shadow-xl shadow-red-200 rounded-full'></img>
            <p>hey👋</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile