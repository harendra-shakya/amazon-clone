import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

export default function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);

    const { data: session } = useSession();

    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex-grow m-5 shadow-sm">
                    <div>
                        <Image
                            className="object-contain"
                            src="/images/banner/Prime-day-banner.png"
                            width={1200}
                            height={250}
                        />
                    </div>

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ? "You Basket is Empty" : "Shopping Basket"}
                        </h1>
                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col  m-5 bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">
                                Subtotal ({items.length} items):{" "}
                                <span className="font-bold">
                                    <Currency quantity={total} currency="INR" />
                                </span>
                            </h2>

                            <button
                                disabled={!session}
                                className={`button mt-2 ${
                                    !session &&
                                    `from-gray-200 to-gray-500 border-gray-200 text-gray-300`
                                }`}
                            >
                                {!session ? "Sign in to checkout" : "Proceed to checkout"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
