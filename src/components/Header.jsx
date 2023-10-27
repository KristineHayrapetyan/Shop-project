import { NavLink as Link } from "react-router-dom"

export function Header() {
  return (
    <nav className=" flex justify-center items-center gap-4 text-3xl bg-gray-200 text-red-500 font-bold p-2 fixed w-full">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
       
       

    </nav>
  )
}
