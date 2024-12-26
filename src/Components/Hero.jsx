import React, { useRef, useState } from 'react'
import Button from './Button';
import {TiLocationArrow} from 'react-icons/ti'

function Hero() {
 const [currIdx,setIdx] =useState(1);
 const [hasCliked, setHasClicked] = useState(false);
 const [isLoading, setisLoading]= useState(true);
 const [loadedVD,setLoadedVD] =useState(0);


const TotalVD = 4;
const nextVideoRef =useRef(null);
const upcomingVD= (currIdx % TotalVD)+1

const handleVideoLoad= ()=>{
  setisLoading(isLoading+1)
}


    const handleMinVideoPlayer=()=>{
      setHasClicked(true);
      setIdx(upcomingVD);

    }

    const GetVDSrc=(index)=>`videos/hero-${index}.mp4`

    
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden' >
        <div id='video-frame' className='relative z-10 h-dvh w-screen  overflow-hidden rounded-lg bg-blue-50' >
          <div>
            <div className='mask-clip-path  absolute-center absolute z-50 size-64 cursor-pointer overflo rounded-lg'>
                <div onClick={handleMinVideoPlayer}>
                  <video ref={ nextVideoRef}
                  src={GetVDSrc(upcomingVD+1)}
                  loop
                  muted
                  id='current-VD'
                  className=' size-60  origin-center object-center object-cover scale-50 opacity-5
                   transition-all duration-500 ease-in hover:scale-90 hover:opacity-100'
                  onLoadedData={handleVideoLoad}
                  />
                </div>

            </div>
            <video
            ref={nextVideoRef}
            src={GetVDSrc(upcomingVD)
             
            }
            // autoPlay
            loop
            muted
            className='absolute left-0 top-0  size-full object-cover
             object-center'
             onLoadedData={handleVideoLoad}
            />
          </div>
          <h1 className=' special-font hero-heading  
          absolute bottom-5 right-5 text-blue-100 z-50'>G<b>a</b>ming</h1>
          <div className='absolute left-0 top-0 z-40'>
            <div className='mt-24 px-5 sm:px-10'>
              <h1 className='special-font hero-heading text-blue-100 uppercase'>redefi<b>n</b>e</h1>
              <p className='b-5 max-w-64 font-robert-regular text-blue-100 '>Enter the metagame layer<br/>unleash the play economy </p>

              <Button id="Watch-trailer" 
              title="Watch Trailer" 
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-2 mt-4"
              />
            </div>
          </div>
        </div>
        <h1 className=' special-font hero-heading  
          absolute bottom-5 right-5 tex-black '>G<b>a</b>ming</h1>
 
    </div>
  )
}

export default Hero