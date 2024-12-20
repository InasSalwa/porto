import {X, Menu} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleNavigate = () => {
            setIsOpen(false);
        }

    const navItems = [
        {
            label: "Home",
            route:"#",
        },
        {
            label: "About",
            route:"#about",
        },
        {
            label: "Education",
            route:"#",
        },
        {
            label: "Experience",
            route:"#",
        },
        {
            label: "Project",
            route:"#",
        },
    ]

    return(
        <nav className="fixed top-0 left-0 w-full text-white py-4 px-6 flex justify-between items-center z-10 devide-x-4">
            <div className="flex items-center">
            <h1 className="ml-4 text-white font-bold">Inas Salwa</h1>
                </div>
                <div
                 className="md:hidden flex item-center cursor-pointer"
                 onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="text-white" size="24"/>
                    ) : (
                        <Menu className="text-white" size="24"/>
                    )}
                </div>
                <div className="hidden md:flex space-x-4">
                    {navItems.map((item, index) => (
                        <a
                          key={index}
                          className="text-white hover:text-gray-400 hover:rounded-full"
                          href={item.route}
                        >
                            {item.label}
                        </a>
                    ))}
                     </div>
            {isOpen && (
                <div className="md:hidden flex flex-col">
                    {navItems.map((item, index) => (
                        <a
                        key={index}
                        className="text-white bg-blue-800 p-4 py-2 hover:border-l-4 border-blue-700"
                        href={item.route}
                        onClick={handleNavigate}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )
            }
        </nav>
    )
}

export default Navbar;