import { FiUser } from "react-icons/fi"

function Nav() {

    return (
        <nav className="p-8 max-md:m-auto max-md:w-screen">
            <div className="flex justify-around max-md:justify-between">
                <div className="font-bold text-4xl text-emerald-700 cursor-pointer max-md:text-3xl">
                    Viaggiamo
                </div>                {/*** nav responsive */} 
                <div className="flex gap-4 text-lg font-bold text-emerald-950 cursor-pointer max-md:fixed max-md:right-0 max-md:flex-col max-md:top-20">
                    <li className=" hover:text-emerald-600 transition duration-300">Splora</li>
                    <li className=" hover:hover:text-emerald-600 transition duration-300">Viaggi</li>
                    <li className=" hover:hover:text-emerald-600 transition duration-300"> Vedi di piu</li>
                </div>                  
                
                <div className="text-lg font-bold text-emerald-50 ">
                    <button className="px-4 py-2 bg-emerald-800 rounded-4xl cursor-pointer hover:bg-emerald-600 transition duration-300 ">
                      <span className="flex  gap-2">
                        <p>Accedi</p>
                        <FiUser size={24}/> 
                        </span> 
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
