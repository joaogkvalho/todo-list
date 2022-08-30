import Rocket from '../assets/rocket.svg'

export function Header(){
    return(
        <div className="w-full h-[200px] flex items-center justify-center bg-gray-700">
            <div className="flex items-center justify-center text-blue-300 text-[2.5rem] font-black">
                <img className="mr-2" src={Rocket} alt="Rocket" />
                <p>to</p>
                <span className="text-purple-500">
                    do
                </span>
            </div>
        </div>
    )
}