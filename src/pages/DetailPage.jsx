
import { useState,useEffect } from "react";
import { getMealById } from "../api";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export function DetailPage() {



  const [meal, setMeal]=useState([]);
  const {id}=useParams();
  const [showVideo,setShowVideo]=useState(false);
  const navigate=useNavigate();

 useEffect(()=>{
  getMealById(id).then(data=>{
    console.log(data.meals[0]);
    setMeal(data.meals[0]);
   
  })

  },[id]);

  return (
    <div className=" grid sm:grid-cols-2 ">

      <div className="left-block pt-[10rem] pl-[5rem] ">
      <button className=' bg-red-500 text-white fixed top-[7rem] left-[7rem] py-1 px-2 cursor-pointer rounded font-bold animate-bounce' onClick={()=>navigate(-1)}>Go Back</button>
       <img src={meal.strMealThumb} alt={meal.strMeal} width='80%'  className=" rounded"/>
       </div>
     <div className="right-block flex justify-center items-center flex-col text-2xl">
     <div className=" border-b-2"><span className=" text-red-500 font-bold ">Meal:  </span>{meal.strMeal}</div>
      <div className=""><span className=" text-red-500 font-bold">Area:  </span>{meal.strArea}</div>
      <div className=""><span className=" text-red-500 font-bold">Category:  </span>{meal.strCategory}</div>
      <button className=" text-red-500 text-xl font-bold border-b-[.3rem] animate-bounce pt-8" onClick={()=>setShowVideo(!showVideo)}>Show Video</button>
      
     </div>
     {
      showVideo && 
      <div className=" fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center">
        <button className=" absolute top-4 right-4 text-red-600 text-3xl cursor-pointer font-bold" onClick={()=>setShowVideo(false)}>X</button>
        <iframe width="700" height="450" src={'https://www.youtube.com/embed/' +  meal.strYoutube.slice(-11) } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
     }

    </div>
  )
}
