


import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useCourse from "../../hocks/useCourse";
import useAxiosSecure from "../../hocks/useAxiosSecure";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2';

const CheckoutForm = () => {
      const [clientSecret, setClientSecret] = useState("");
      const [transactionId, setTransactionId] = useState("");
      const [error, setError] = useState("");
      const [course, , refetch] = useCourse();
      const axiosSecure = useAxiosSecure();
      const elements = useElements();
      const stripe = useStripe();
      const { user } = useContext(AuthContext);

      const totalPrice = course.reduce((total, item) => total + item.price, 0);

      // Payment Intent
      useEffect(() => {
            if (totalPrice > 0) {
                  axiosSecure.post("/create-payment-intent", { price: totalPrice })
                        .then((res) => {
                              setClientSecret(res?.data?.clientSecret);
                        })
                        .catch((err) => console.error("Payment Intent Error:", err));
            }
      }, [axiosSecure, totalPrice]);

      const handleSubmit = async (event) => {
            event.preventDefault();
            if (!stripe || !elements) return;

            const card = elements.getElement(CardElement);
            if (!card) return;

            // Payment Method 
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: "card",
                  card,
            });

            if (error) {
                  setError(error.message);
                  return;
            }
            else {
                  console.log('Payment Method', paymentMethod)
                  setError('')
            }

            // Payment Confirm 
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                  payment_method: {
                        card,
                        billing_details: {
                              email: user?.email,
                        },
                  },
            });

            if (confirmError) {
                  setError("Payment confirmation failed!");
                  return;
            }

            if (paymentIntent.status === "succeeded") {
                  setTransactionId(paymentIntent.id);
                  setIsPaid(true);
                  // Payment Data Backend
                  const payment = {
                        price: totalPrice,
                        transactionsId: paymentIntent.id,
                        email: user.email,
                        date: new Date(),
                        status: "Pending",
                  };
                  const res = await axiosSecure.post("/payments", payment);
                  if (res.data?.paymentResult?.insertedId) {
                        toast.success('payments')
                  }
                  refetch();
            }
      };

      return (
            <div>
                  <form className="max-w-screen-sm mt-6" onSubmit={handleSubmit}>
                        <CardElement
                              options={{
                                    style: {
                                          base: {
                                                fontSize: "18px",
                                                color: "#424770",
                                                "::placeholder": { color: "#aab7c4" },
                                          },
                                          invalid: { color: "#9e2146" },
                                    },
                              }}
                              className="p-3 border-2 rounded border-[#23b792] focus:outline-none focus:ring mb-4"
                        />
                        <button
                              type="submit"
                              className={`bg-[#23b792] text-white w-full py-2 rounded-full mt-3 text-xl font`}
                        >
                              pay
                        </button>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        {transactionId && (
                              <p className="text-green-600 mt-2 text-sm tracking-wide">
                                    Your Transaction id: {transactionId}
                              </p>
                        )}
                  </form>
            </div>
      );
};

export default CheckoutForm;






