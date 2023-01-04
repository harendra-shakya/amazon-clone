import Head from "next/head";
import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

export default function Header() {
    return (
        <header>
            {/* Top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image src="/amazon.png" width={150} height={150} className="cursor-pointer" />
                </div>

                {/* Search */}
                <div className="hidden sm:flex items-center h-10 rounded-md focus:outline-none flex-grow  m-2 cursor-pointer bg-yellow-400 hover:bh-yellow-500">
                    <input
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-md"
                        type="text"
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <p>Hello Harendra</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>

                    <div className="link">
                        <p className="">Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div className="relative flex items-center link">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            4
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>

            {/* Bottom nav */}

            <div></div>
        </header>
    );
}
