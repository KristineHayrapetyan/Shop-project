import { useNavigate } from "react-router-dom";


export function MealItem({item}) {

  const navigate=useNavigate();


  return (
    <div className=" flex justify-center items-center flex-col gap-4 border rounded p-4 cursor-pointer shadow-xl " onClick={()=> navigate('/meal/' + item.idMeal)}>

      <img src={item.strMealThumb} alt={item.strMeal} />
      <div className=" text-center font-extrabold text-red-500">{item.strMeal}</div>


    </div>
  )
}
