
function Nav() {

    return (
        <nav className="p-8">
            <div className="flex justify-around ">
                <div className="font-bold text-2xl text-emerald-700 cursor-pointer">
                    Viaggiamo
                </div>
                <div className="flex gap-4 text-lg font-bold text-emerald-950 cursor-pointer ">
                    <li className=" hover:text-emerald-600 transition duration-300">Splora</li>
                    <li className=" hover:hover:text-emerald-600 transition duration-300">Viaggi</li>
                    <li className=" hover:hover:text-emerald-600 transition duration-300"> Vedi di piu</li>
                </div>
                <div className="text-lg font-bold text-emerald-50 ">
                    <button className="px-4 py-2 bg-emerald-800 rounded-4xl cursor-pointer hover:bg-emerald-600 transition duration-300 ">
                        Accedi
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default Nav
