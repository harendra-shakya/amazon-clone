import moment from "moment";
import Currency from "react-currency-formatter";

export default function Order({ id, amount, items, timestamp, images }) {
    return (
        <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p>ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format("DD MM YYY")}</p>
                </div>

                <div>
                    <p className="text-xs font-bold">TOTAL</p>
                    <p>
                        <Currency quantity={amount} currency="INR" /> - Next Day Delivery
                    </p>
                    <p>FREE</p>
                </div>

                <p className="text-sm whitespace-normal sm:text-xl self-end flex-1 text-right text-blue-500">
                    {items.length} items
                </p>
            </div>
            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                    {images.map((image) => (
                        <img src={image} alt="" className="h-20 object-contain sm:h-32" />
                    ))}
                </div>
            </div>
        </div>
    );
}
