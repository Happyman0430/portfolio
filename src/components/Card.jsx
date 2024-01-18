import React, {useEffect} from 'react'
export  function Card({src,title,text,stack,url,github,vw})  {
  return (
    vw>1520?
    <div className="card w-[400px] 2xl:w-[500px] shadow-xl mt-6 m-10 hover:grayscale-0 grayscale hover:scale-110 work">
        <figure><img  className='h-[250px]' src={src} alt="Shoes" /></figure>
        <div className="card-body bg-base-400 p-3 ">
            <div className='text-3xl text-center font-bold cursor-pointer underline font-Dancing'><a href={url} target="_blank">{title}</a></div>
            <p>{text}</p>
            <div className='pl-3 font-bold text-xl cursor-pointer underline'>  <a href={github} target="_blank"><i className="fa-brands fa-github"></i>  Skills : {stack}</a></div>
        </div>
    </div>:
    <div className="flip-box w-[300px] h-[200px] m-6 lg:w-[400px] lg:h-[250px] mt-4 xl:w-[450px] xl:h-[270px] work">
        <div className="flip-box-inner">
        <div className="flip-box-front">
            <img src={src} alt="Paris" className='w-[300px] h-[200px] lg:w-[400px] lg:h-[250px] xl:w-[450px] xl:h-[270px]'/>
        </div>
        <div className="flip-box-back">
            <div className='text-3xl text-center font-bold cursor-pointer underline pt-8'><a href={url} target="_blank">{title}</a></div>
            <p className='px-3 pt-8 text-md'>{text}</p>
            <div className='p-4 font-bold text-lg cursor-pointer underline'>  <a href={github} target="_blank"><i className="fa-brands fa-github"></i>  Skills : {stack}</a></div>
        </div>
        </div>
    </div>
  )
}

// export default Card