import React, { useState, useEffect } from "react";
import img1 from "./assets/Asset 1.png"

const Window = () => {
   const [isTranslated, setIsTranslated] = useState(false);
  const [home, setHome] = useState(true);
  const handlehomeclick = () => {

    if (home === true) {
      setIsTranslated(false)
    }
    else {
      setHome(false)
    }



  }
  const handleClick = () => {
    setIsTranslated(!isTranslated);
    if (isTranslated === true) {

      setHome(false)
    }

  };


  return (
    <div>  <div className=" h-screen w-full  flex  flex-wrap  pl-20 pr-6 py-12 max-md:px-5 ">



    <div className="flex w-full gap-0 mt-0 max-md:flex-wrap">
      <div className={`z-10 flex flex-col items-stretch text-6xl text-white  font-bold mt-72 flex-1 self-end  max-md:text-4xl max-md:mt-10 ${isTranslated ? 'translatedText' : ''}`} >
        <h1 className="max-md:text-4xl">NEVER GIVE UP</h1>
        <h2 className="mt-3.5 max-md:max-w-full max-md:text-4xl">KEEP RUNNING</h2>
        <a href="/" className="text-yellow-400 text-2xl mt-4 max-md:max-w-full">
          ENJOY RUNNING ENJOY FREEDOM
        </a>
        <div className="flex w-[54px] shrink-0 h-[54px] flex-col mr-24 mt-56 rounded-full self-end max-md:mr-2.5 max-md:mt-10" />
      </div>

      <div style={{
        position: 'relative',
        transition: ' 2.5s ease',
      }} className={`flex flex-col  z-99 rounded-full   flex-1  ${isTranslated ? 'translatedImg' : ''}`}>

        <div className=" flex flex-col justify-center max-md:pl-5">

          <div className="flex flex-wrap justify-center w-[508px] h-[508px] rounded-full items-stretch   max-md:flex-wrap " id="main_img">

            <div className="flex justify-self-center justify-center mt-[80px] rounded-full flex-1 z-[999] Img-back">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&" className="aspect-square object-contain object-center w-full max-md:max-w-full"
                alt="Running Image"
              />

            </div>
            <div class="box-4 absolute flex justify-self-center">
              <div class="loader-4 w-[702px] h-[702] ">
                <div class="dbl-spin-1 w-[588px] h-[588px]"></div>
                <div class="dbl-spin-2 w-[792px] h-[792px] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch flex basis-0 flex-col my-auto pb-2.5 z-[999]">


       <button
          onClick={handlehomeclick}
          style={{ cursor: 'pointer' }}
          className="text-white text-2xl font-medium justify-center hover:text-fuchsia-400 hover:scale-105 active:"
        >
          Home
        </button>
       <button
          style={{ cursor: 'pointer' }}
          onClick={handleClick}
          className="text-white  text-2xl font-medium mt-10 max-md:mt-10 hover:text-fuchsia-400 hover:scale-105">Work</button>
      </div>


    </div>
{  /*    <div className=h-[100vh] w-[50vw] bg-[#262626] flex ml-[30vw] hidden-section ${isTranslated ? 'translatedSection' : ''}>
      <div className="grid grid-cols-2 ">
        <img src="" />
        <div className="flex justify-center py-12 px-6">
          <p className="text-white flex">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iusto quia ipsum ex excepturi. Vel cum reiciendis sunt eos architecto quo ipsam ullam omnis.</p>
        </div>
        <div className="flex justify-center py-12 px-6">
          <p className="text-white flex">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iusto quia ipsum ex excepturi. Vel cum reiciendis sunt eos architecto quo ipsam ullam omnis.</p>
        </div>
        <img src="" />
        <img src="" />
        <div className="flex justify-center py-12 px-6">
          <p className="text-white flex">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iusto quia ipsum ex excepturi. Vel cum reiciendis sunt eos architecto quo ipsam ullam omnis.</p>
        </div>

        <div className="flex justify-center py-12 px-6">
          <p className="text-white flex">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iusto quia ipsum ex excepturi. Vel cum reiciendis sunt eos architecto quo ipsam ullam omnis.</p>
        </div>
        <img src="" />


      </div>
    </div>
*/}
     </div>
  <div className="flex w-screen h-auto ">
  <div className="absolute top-[13.82rem] left-[81.13rem] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.38rem] h-[3.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
  <div className="absolute top-[7.14rem] left-[39rem] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.38rem] h-[3.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
  <div className="absolute top-[52.82rem] left-[30.56rem] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.38rem] h-[3.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
  <div className="absolute top-[46.7rem] left-[83.5rem] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.38rem] h-[3.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />



<div className="grid m-auto  max-w-[1240px] py-8 px-3 w-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0 text-white">
  
    <div className="flex justify-center min-w-[360px]  max-h-[350px] flex-wrap m-auto  pb-20">
      <h2 className="text-3xl text-bold">VISHNU KAMALIYA <br/> <span className="text-yellow-500 mt-2" >ULTRA MARATHONER</span></h2>

      <p className="mt-5 m-auto px-10 md:px-28 leading-6">
       VISHNU KAMALIYA IS ULTRA-MARATHONER.  PROVIDES A 
MARVELLOUS LENS TO THE SPORT.  PARTICIPATED IN MORE 
THAN 18 PLUS MARATHON EVENTS. ALSO ORGANISED MANAGED 
AND  DIRECTED MORE THAN 25 PLUS GOVERNMENT AND PRIVATE 
      </p>
  
    </div>
    <div className="sm:justify-center m-auto flex-nowwrap">
      <img
        src={img1}
        className="h-auto  w-full flex justify-self-center  min-w-[470px] m rounded-3xl p-2"
        alt="Image2"
      />
    </div>

   
      </div>
    </div>
</div>
  )
}

export default Window