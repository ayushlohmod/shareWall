import React, { useState, useEffect } from 'react'

import { AiOutlineLogout } from 'react-icons/ai'
import { useParams, useNavigate } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google'

import { userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../utils/data'
import { client } from '../client'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'

const randomImage = 'https://source.unsplash.com/1600x900/?nature,photography,technology'

const UserProfile = () => {

  const [user, setUser] = useState(null)
  const [pins, setPins] = useState(null)
  const [text, setText] = useState('Created')
  const [activateBtn, setActivateBtn] = useState('created')
  const navigate = useNavigate();
  const { userId } = useParams();

  if(!user){
    return <Spinner message='loading profile...'/>

  }



  return (
    <div className='relative pb-2 h-full justify-center items-center'>
      <div className='flex flex-col pb-5'>
        <div className='relative flex flex-col mb-7'>
          <div className='flex flex-col justify-center items-center'>
            <img 
                src={randomImage}
                className='w-full h-370 2xl:h-510 shadow-lg object-cover'
                alt='banner-pic'
              />
            

          </div>

        </div>

      </div>
    </div>
  )
}

export default UserProfile