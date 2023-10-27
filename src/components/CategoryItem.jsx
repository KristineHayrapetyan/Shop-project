import { Link } from "react-router-dom"

export function CategoryItem({item}) {
  return (
    <div className=" flex justify-center items-center flex-col gap-4 border rounded p-4 shadow-2xl">
        <img src={item.strCategoryThumb} alt={item.strCategory} />
        <div className=" font-extrabold text-center text-red-600 text-xl">{item.strCategory}</div>
        <div>{
        item.strCategoryDescription.length>100? item.strCategoryDescription.slice(0,100)+'...': item.strCategoryDescription 
        }</div>
        <Link className=" bg-orange-300 p-1 text-red-500 font-bold rounded text-xs" to={'/category/' + item.strCategory + '/' + item.strCategoryDescription}>Show all {item.strCategory}...</Link>

    </div>
  )
}
