import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../Assets/mobile.mp4';
import logo from '../Assets/image.png';


import jwt_decode  from "jwt-decode";
import {client} from '../client';


const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) =>{
    console.log(response);

    createOrGetUser(response).then((decode) => {
      const { name, picture, sub } = decode;
      localStorage.setItem("user", JSON.stringify(decode));
      const doc = {
        _id: sub,
        _type: "user",
        userName: name,
        image: picture,
      };
      client.createIfNotExists(doc).then(() => {
        navigate("/", { replace: true });
      })
    });
  };    

      const createOrGetUser = async (response) => {
        const decode = jwt_decode(response.credential);
        return decode;

  };
  return (
    <div className='flex justify-start item-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src= {shareVideo}
          type= "video/mp4"
          loop
          controls = {false}
          muted
          autoPlay
          className='w-full h-full object-cover'
          />
          <div className= "absolute flex flex-col justify-center items-center  top-0 right-0 left-0 bottom-0 bg-blackOverlay" >
          <div className='p-5'>
            <img src={logo} className="pb-5 " width='130px' alt='logo'/>
          
            <div className='shadow-2xl'>
              <GoogleLogin 
                
                render={(renderProps)=>(
                  
                  <button type='button' className='bg-mainColor flex justify-center items-center p-3 rounded-lg'
                  onClick={renderProps.onClick}
                  disabled = {renderProps.disabled}
                  >
                  
                  <FcGoogle className='mr-3'/> Sign in with Google

                  </button>
                  

                )}
                onSuccess={responseGoogle}
                onError={responseGoogle}
                cookiePolicy="single_host_origin"
              />

            </div>

          </div>

          </div>
      </div>
    </div>
  )
}

export default Login