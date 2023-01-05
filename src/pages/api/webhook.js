import { buffer } from "micro";
import * as admin from "firebase-admin";

// Secure connection to firebase from the backend
const serviceAccount = require("../../../permissions.json");
const app = !admin.apps.length
    ? admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
      })
    : admin.app();

// Establish connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endPointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
    console.log("Fulling order", session);

    return app
        .firestore()
        .collection("users")
        .doc(session.metadata.email)
        .collection("orders")
        .doc(session.id)
        .set({
            amount: session.amount_total / 100,
            images: JSON.parse(session.metadata.images),
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            console.log(`SUCCESS: Orders ${session.id} had been added to the DB`);
        });
};

export default async (req, res) => {
    if (req.method === "POST") {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"];

        let event;

        // verify the event posted came from stripe
        try {
            event = stripe.webhooks.constructEvent(payload, sig, endPointSecret);
        } catch (e) {
            console.log("ERROR", e.message);
            return res.status(400).send(`Webhook error: ${e.message}`);
        }

        // Handle the checkout.session,completed event

        let session;

        if (event.type === "checkout.session.completed") {
            session = event.data.object;
        }

        // Fulfill order
        return fulfillOrder(session)
            .then(() => res.status(200))
            .catch((e) => res.status(400).send(`Webhook Error ${e.message}`));
    }
};

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};
