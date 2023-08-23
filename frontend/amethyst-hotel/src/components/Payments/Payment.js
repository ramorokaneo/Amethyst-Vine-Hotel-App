import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/react-stripe-js";
import CheckeoutForm from "../forms/CheckoutForm";
import Elements from "@stripe/react-stripe-js";

function Payment(props) {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("/config").then(async (r) => {
            const { publishableKey } = await r.json();

            setStripePromise(loadStripe(publishableKey));
        });
    }, []);

    useEffect(() => {
        fetch("/create-payment-intent", {
            method: "POST",
            body: JSON,stringify({}),
        }).then(async (r) => {
            const { clientSecret } = await r.json();

            setStripePromise(loadStripe(publishableKey));
        });
    }, []);

    return (
        <>
            <h1>Payment</h1>
            {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckeoutForm />
            </Elements>
            )}
        </>
    );
}

export default Payment;