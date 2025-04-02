import { CardElement } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
      const [error, setError] = useState('')


      const handleSubmit = async (event) => {
            event.preventDefault();
      }

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
                        <button type="submit" className="bg-[#23b792] text-white w-full py-2 rounded-full mt-3 text-xl">
                              Pay
                        </button>
                  </form>
            </div>
      );
};

export default CheckoutForm;