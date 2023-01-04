import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";
import Curreny from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
    );

    const [hasPrime] = useState(Math.random() < 0.5);

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 italic text-gray-400">{category}</p>

            <Image src={image} width={200} height={200} />

            <h4 className="my-3">{title}</h4>

            <div>
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
                <div className="flex itmes-centre space-x -mt-5">
                    <Image className="w-12" src="/prime.png" width={50} height={50} />
                    <p className="text-xs text-gray-500">FREE Next day Delivery</p>
                </div>
            )}

            <button>Add to Basket</button>
        </div>
    );
}
