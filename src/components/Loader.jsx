import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);
  const flavourRef = useRef(null);
  const loadTimeRef = useRef(null)

  useEffect(() => {
    gsap.to(loaderRef.current, {
      y: '-100%',        
      duration: 1.5,      
      ease: 'power2.inOut', 
      delay: 6,           
    });
    gsap.to(flavourRef.current, {
        ease: 'power3.inOut',
        letterSpacing: '0.34em',
        duration:1.8,
        yoyo:true
      })
      gsap.to(loadTimeRef.current,{
        width: '100%',
        duration:6,
        ease: 'linear'
      })
  }, []); 


      


  return (
    <div
      ref={loaderRef}
      className="w-screen h-[109vh] bg-zinc-800 z-[100] top-[-9vh] fixed flex justify-center items-center flex-col overflow-hidden font-inter"
    >
      <h1 ref={flavourRef} className="text-[8vw] font-inter text-white font-extrabold tracking-wide">Flavourz</h1>

      <div className="w-[60vw] h-[8vh] bg-white mt-8 overflow-hidden flex items-center rounded-full px-2">
          <div ref={loadTimeRef} className="w-[3vw] rounded-full h-[6vh] bg-zinc-800">

          </div>
      </div>
    </div>

  );
};

export default Loader;
