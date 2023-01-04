import Header from "../components/Header";
import Image from "next/image";

export default function Checkout({ products }) {
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-2xl mx-auto">
                {/* Left */}

                {/* <div>
                    <Image />
                </div> */}

                <div className="flex-grow m-5 shadow-sm">
                    <div className="flex flex-col-5 p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
                    </div>
                </div>

                {/* Right */}
                <div></div>
            </main>
        </div>
    );
}
