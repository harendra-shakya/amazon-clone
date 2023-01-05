import Head from "next/head";
import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

export default function Header() {
    const { data: session } = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header>
            {/* Top nav */}
            <div className="flex items-center space-x-3 bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push("/")}
                        src="/amazon.png"
                        width={105}
                        height={40}
                        className="cursor-pointer p-1"
                    />
                </div>

                {/* Search */}
                <div className="hidden sm:flex items-center h-10 rounded-md focus:outline-none flex-grow  cursor-pointer bg-yellow-400 hover:bh-yellow-500">
                    <input
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-md"
                        type="text"
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link" onClick={!session ? signIn : signOut}>
                        <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>

                    <div className="link">
                        <p className="">Returns</p>
                        <p
                            onClick={() => router.push("./orders")}
                            className="font-extrabold md:text-sm"
                        >
                            & Orders
                        </p>
                    </div>

                    <div className="relative flex items-center link">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            {items.length}
                        </span>
                        <ShoppingCartIcon
                            className="h-10"
                            onClick={() => router.push("/checkout")}
                        />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>

            {/* Bottom nav */}

            <div className="flex items-center space-x-3 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                </p>
                <p className="link">Prime Videos</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    );
}
