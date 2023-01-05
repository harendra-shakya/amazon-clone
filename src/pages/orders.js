import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";
import db from "../../firebase";
import moment from "moment";
import Order from "../components/Order";

export default function Orders({ orders }) {
    console.log(orders);
    const { data: session } = useSession();
    return (
        <div className="h-screen">
            <Header />

            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">Your Orders</h1>
                {session ? (
                    <h2>{orders.length} orders</h2>
                ) : (
                    <h2>Please Login to see your orders</h2>
                )}

                <div className="mt-5 space-y-4">
                    {orders?.map(({ id, amount, items, timestamp, images }) => {
                        return (
                            <Order
                                key={id}
                                id={id}
                                amount={amount}
                                items={items}
                                timestamp={timestamp}
                                images={images}
                            />
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

    // Get the users logged in credentials
    const session = await getSession(context);

    if (!session) {
        return {
            props: {},
        };
    }

    // firebase db
    const stripeOrders = await db
        .collection("users")
        .doc(session.user.email)
        .collection("orders")
        .orderBy("timestamp", "desc")
        .get();

    // stripe orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.data().amount,
            amount: order.data().amount,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );

    return {
        props: {
            orders,
        },
    };
}
