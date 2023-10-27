
import { useState,useEffect } from 'react';
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function CategoryPage() {

    const [meals,setMeals]=useState([]);
    const {name, descr}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        getFilteredCategory(name).then(data=>{
            console.log(data.meals);
            setMeals(data.meals);
        })


    },[name]);

  return (
    <div className=' mx-auto pt-[6rem] p-8' >

       <button className=' bg-red-500 text-white fixed top-[4rem] left-[3.5rem] py-1 px-2 cursor-pointer rounded font-bold animate-bounce' onClick={()=>navigate(-1)}>Go Back</button>
        <div className=' text-red-500'>{descr}</div>
        <MealList meals={meals}/>
       


    </div>
  )
}
