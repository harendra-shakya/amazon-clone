import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import Curreny from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({ id, title, price, description, category, image }) {
    const [rating, setRating] = useState(2);

    const [hasPrime, setHasPrime] = useState(false);

    useEffect(() => {
        setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING));
        setHasPrime(Math.random() < 0.5);
    }, [rating]);

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            <Image className="object-contain" src={image} width={200} height={200} />

            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating)
                    ?.fill()
                    ?.map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Curreny quantity={price} currency="INR" />
            </div>

            {hasPrime && (
                <div className="flex items-centre space-x-2 -mt-5 p-1">
                    <img className="w-12" src="/prime.png" />
                    <p className="text-xs text-gray-500">FREE Next day Delivery</p>
                </div>
            )}

            <button className="mt-auto button">Add to Basket</button>
        </div>
    );
}
