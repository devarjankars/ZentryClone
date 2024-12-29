import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import {TiLocationArrow} from 'react-icons/ti'
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

function Hero() {
 const [currIdx,setIdx] =useState(1);
 const [hasCliked, setHasClicked] = useState(false);
 const [isLoading, setisLoading]= useState(true);

 const [loadedVD,setLoadedVD] =useState(0);


const TotalVD = 4;
const nextVideoRef =useRef(null);
const upComingVD=(currIdx % TotalVD)+1;

const handleVideoLoad= ()=>{
 setLoadedVD((prev)=>prev+1)
}


 const handleMinVideoPlayer=()=>{
      setHasClicked(true);
      setIdx(upComingVD);

    }


    useGSAP(
      () => {
        if (hasCliked) {
          gsap.set("#next-video", { visibility: "visible" });
          gsap.to("#next-video", {
            transformOrigin: "center center",
            scale: 1,
            width: "100%",
            height: "100%",
            duration: 1,
            ease: "power1.inOut",
            onStart: () => nextVideoRef.current.play(),
          });
          gsap.from("#current-video", {
            transformOrigin: "center center",
            scale: 0,
            duration: 1.5,
            ease: "power1.inOut",
          });
        }
      },
      {
        dependencies: [currIdx],
        revertOnUpdate: true,
      }
    );
  

 useGSAP(()=>{
gsap.set('#video-frame',{
  clipPath:'polygon(8%  0%, 78% 0%, 90% 90% ,0% 100%)',
  borderRadius:'0% 0% 40% 10%',
 
})

 gsap.from('#video-frame',{
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
  scrollTrigger: {
    trigger: "#video-frame",
    start: "center center",
    end: "bottom center",
    scrub: true,

  }
 })

 })
  const GetVDSrc=(index)=>`videos/hero-${index}.mp4`

 useEffect(()=>{
  if(loadedVD===TotalVD-1){
    console.log(loadedVD);
          setisLoading(false);
}
 },[loadedVD])

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden' >
{/* 
      {isLoading===true && (
        <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-slate-200'> 
          <div className='three-body'>
            <div className='three-body__dot'></div>
            <div className='three-body__dot'></div>
            <div className='three-body__dot'></div>
          </div>
        </div>
          )
      } */}
        <div id='video-frame' className='relative z-10 h-dvh w-screen  overflow-hidden rounded-lg bg-blue-50' >
          <div>
            <div className='mask-clip-path  absolute-center absolute z-50 size-64 cursor-pointer overflo rounded-lg '>
                <div onClick={handleMinVideoPlayer}>
                  <video ref={ nextVideoRef}
                  src={GetVDSrc(upComingVD)}
                  loop
                  muted
                  id='current-VD'
                  className=' size-64  origin-center object-center object-cover scale-50 opacity-5
                   transition-all duration-500 ease-in hover:scale-90 hover:opacity-100 rounded-xl border-2 border-red-950'
                  onLoadedData={handleVideoLoad}
                  />
                </div>
            </div>
            <video
            ref={nextVideoRef}
            src={GetVDSrc(currIdx)
             
            }
            // autoPlay
            loop
            muted
            className='absolute left-0 top-0  size-full object-cover
             object-center'
             id='next-video'
             onLoadedData={handleVideoLoad}
            />
          </div>
          <h1 className=' special-font hero-heading  
          absolute bottom-5 right-5 text-blue-100 z-50'>G<b>a</b>ming</h1>
          <div className='absolute left-0 top-0 z-40'>
            <div className='mt-16 px-5 sm:px-10'>
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