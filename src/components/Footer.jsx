
import { NavLink as Link } from "react-router-dom"

export function Footer() {
  return (
    <div className=" flex justify-between items-center text-l bg-gray-200 text-red-400 py-2 px-12 fixed bottom-0 w-full">
        <div>Created by <span className=" text-red-500 underline font-bold">Kristina Hayrapetyan</span></div>
        <nav>
        <Link to='/about'>About</Link>
        <Link to='/contact' className=' ml-5'>Contact</Link>
        </nav>
        
    </div>
  )
}
