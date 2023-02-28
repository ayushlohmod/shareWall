import React,{useState} from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import { client } from '../client'
import Spinner from './Spinner'
import { categories } from '../utils/data'



const CreatePin = ( { user }) => {
  const [title, setTitle] = useState('')
  const [about, setAbout] = useState('')
  const [destination, setDestination] = useState('')
  const [loading, setLoading] = useState(false)
  const [fields, setFields] = useState(false)
  const [category, setCategory] = useState(null)
  const [imageAsset, setImageAsset] = useState(null)
  const [wrongImagetype, setWrongImagetype] = useState(false)

  const navigate = useNavigate();



  return (
    <div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
    
    {fields && (
      <p className='text-red-500 mb-5 text-xl transition-all duration-150 ease-in'>Please fill in all the fields. </p>
    )}

    <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full'>
      <div className='bg-secondaryColor p-3 flex flex-0.7 w-full'>
        <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
          {loading && <Spinner />}
          {wrongImagetype && <p>Wrong image type</p>}
          {!imageAsset ? (
            <label>
              <div className='flex flex-col items-center justify-center h-full'>
                <div className=' flex flex- col justify-center items-center'>
                  <p className='font-bold text-2xl'>
                    <AiOutlineCloudUpload />

                  </p>

                </div>

              </div>
            </label>

          ) :(
            <p>something else</p>
          )}
        </div>


      </div>

    </div>
    
    </div>
  )
}

export default CreatePin