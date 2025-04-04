

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useCourse from '../../hocks/useCourse';
import useAxiosSecure from '../../hocks/useAxiosSecure';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';

const CheckoutForm = () => {
      const [clientSecret, setClientSecret] = useState('')
      const [transactionId, setTransactionId] = useState('')
      const [error, setError] = useState('');
      const [isPaid, setIsPaid] = useState(false);
      const [course] = useCourse();
      const axiosSecure = useAxiosSecure();
      const elements = useElements();
      const stripe = useStripe();
      const { user } = useContext(AuthContext)


      // Check if the user has already paid
      //     useEffect(() => {
      //       if (userEmail) {
      //           axiosSecure.get(`/payments/check/${userEmail}`)
      //               .then(res => {
      //                   if (res.data?.paid) {
      //                       setIsPaid(true);
      //                   }
      //               })
      //               .catch(err => console.error(err));
      //       }
      //   }, [userEmail, axiosSecure]);


      const totalPrice = course.reduce((total, item) => total + item.price, 0)
      console.log('totalPrice', totalPrice)

      useEffect(() => {
            if (totalPrice > 0) {
                  axiosSecure.post('/create-payment-intent', { price: totalPrice })
                        .then(res => {
                              console.log('res.data.clientSecret', res.data.clientSecret)
                              setClientSecret(res?.data?.clientSecret)
                        })
            }
      }, [axiosSecure, totalPrice])


      const handleSubmit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                  return;
            }

            const card = elements.getElement(CardElement);

            if (card == null) {
                  return
            }

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: 'card',
                  card,
            });

            if (error) {
                  console.log('Payment Error', error);
                  setError(error.message);
            } else {
                  console.log('Payment Method', paymentMethod);
                  // toast.success('Payment Successful!');
                  setError('');
                  setIsPaid(true);
            }

            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                  payment_method: {
                        card: card,
                        billing_details: {
                              email: user?.email || 'anonymous'
                        }
                  }
            })
            if (confirmError) {
                  console.log('confirm error')
            }
            else {
                  console.log('payment intent', paymentIntent)
            }
      };

      return (
            <div>
                  <form className="max-w-screen-sm mt-6" onSubmit={handleSubmit}>
                        <CardElement
                              options={{
                                    style: {
                                          base: {
                                                fontSize: '18px',
                                                color: '#424770',
                                                '::placeholder': {
                                                      color: '#aab7c4',
                                                },
                                          },
                                          invalid: {
                                                color: '#9e2146',
                                          },
                                    },
                              }}
                              className="p-3 border-2 rounded border-[#23b792] focus:outline-none focus:ring mb-4"
                        />
                        <button
                              disabled={!stripe || isPaid}
                              type="submit"
                              className={`bg-[#23b792] text-white w-full py-2 rounded-full mt-3 text-xl font ${isPaid ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                        >
                              {isPaid ? "Already Paid" : "Pay"}
                        </button>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        {transactionId && <p className="text-green-600 mt-2 text-sm tracking-wide">Your Transaction id {transactionId}</p>}
                  </form>
            </div>
      );
};

export default CheckoutForm;
