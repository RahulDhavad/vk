import React,{useState,useEffect} from "react";
import { motion , useAnimation} from 'framer-motion';
import './App.css'
function App() {
  const [isTranslated, setIsTranslated] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    setIsTranslated(!isTranslated);
  };

  const [rotationDegree, setRotationDegree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationDegree((prevDegree) => (prevDegree + 1) % 360);
    }, 10);

    return () => clearInterval(interval);
  }, []);


  return (
<>




    <div className="bg-stone-950 h-screen flex flex-col pl-20 pr-6 py-12 max-md:px-5 ">
  
    
         
      <div className="flex w-full gap-0 mt-0 max-md:max-w-full max-md:flex-wrap">
       <div className={`z-10 flex flex-col items-stretch text-6xl text-white  font-bold mt-72 flex-1 self-end max-md:max-w-full max-md:text-4xl max-md:mt-10 ${isTranslated ? 'translatedText' : ''} `}>
          <h1 className="max-md:max-w-full max-md:text-4xl">NEVER GIVE UP</h1>
          <h2 className="mt-3.5 max-md:max-w-full max-md:text-4xl">KEEP RUNNING</h2>
          <a href="/" className="text-yellow-400 text-2xl mt-4 max-md:max-w-full">
            ENJOY RUNNING ENJOY FREEDOM
          </a>
          <div className="flex w-[54px] shrink-0 h-[54px] flex-col mr-24 mt-56 rounded-full self-end max-md:mr-2.5 max-md:mt-10" />
        </div>

        <div style={{
          position: 'relative',
          transition: ' 2.5s ease',}}  className={`flex flex-col  z-99 rounded-full   flex-1  ${isTranslated ? 'translatedImg' : ''}`}>
          <div className="border flex flex-col justify-center pl-16 py-12 w-[790px] h-[790px] rounded-full border-solid border-white items-end max-md:max-w-full max-md:pl-5">
            <div className="flex w-[588px] h-[588px] items-stretch justify-between gap-5 mt-28 mb-20 max-md:flex-wrap max-md:my-10" id="main_img">
              <div className="flex flex-col justify-center items-stretch rounded-full flex-1 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed43f9fd81b9a40ae4d496709385f28ed3ce787fe893a1ebbc999f0451874bef?apiKey=7b31b7140b444c699f3522e50f1c6b97&"className="aspect-square object-contain object-center w-full max-md:max-w-full"
                  alt="Running Image"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c8dd311824bb1f85023c3562177bd2c4ba5bedd48d2cba1599d56c22b7a689e?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                className="aspect-[0.17] object-contain object-center w-[66px] shrink-0 mt-2 rounded-full self-start"
                alt="Running Icon"
              />
            </div>
          </div>
        </div>
        <div className="items-stretch flex basis-0 flex-col my-auto pb-2.5 ">
       

          <button
          
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
      <div className={`h-[100vh] w-[50vw] bg-[#262626] flex ml-[30vw] hidden-section ${isTranslated ? 'translatedSection' : ''}`}>
<div className="grid grid-cols-2 ">
<img src=""/>
<div className="flex justify-center py-12 px-6">
<p className="text-white flex">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iusto quia ipsum ex excepturi. Vel cum reiciendis sunt eos architecto quo ipsam ullam omnis.</p>
</div>
<div className="flex justify-center py-12 px-6">
<p className="text-white flex">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iusto quia ipsum ex excepturi. Vel cum reiciendis sunt eos architecto quo ipsam ullam omnis.</p>
</div>
<img src=""/>
<img src=""/>
<div className="flex justify-center py-12 px-6">
<p className="text-white flex">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iusto quia ipsum ex excepturi. Vel cum reiciendis sunt eos architecto quo ipsam ullam omnis.</p>
</div>

<div className="flex justify-center py-12 px-6">
<p className="text-white flex">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iusto quia ipsum ex excepturi. Vel cum reiciendis sunt eos architecto quo ipsam ullam omnis.</p>
</div>
<img src=""/>


</div>
</div>
    </div>
   

</>
  );
}

export default App;