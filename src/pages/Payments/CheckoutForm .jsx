


// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useContext, useEffect, useState } from "react";
// import useAxiosSecure from "../../hocks/useAxiosSecure";
// import toast from "react-hot-toast";
// import { AuthContext } from "../../provider/AuthProvider";
// import { useLoaderData, useNavigate } from "react-router-dom";

// const CheckoutForm = () => {
//       const [clientSecret, setClientSecret] = useState("");
//       const [transactionId, setTransactionId] = useState("");
//       const [error, setError] = useState("");
//       const [isPaid, setIsPaid] = useState(false);
//       const axiosSecure = useAxiosSecure();
//       const elements = useElements();
//       const stripe = useStripe();
//       const { user } = useContext(AuthContext);
//       const navigate = useNavigate()

//       // Find Data
//       const coursepayment = useLoaderData()
//       // Price Formate
//       const totalPrice = coursepayment?.price || 0;

//       // Payment Intent
//       useEffect(() => {
//             if (totalPrice > 0) {
//                   axiosSecure.post("/create-payment-intent", { price: totalPrice })
//                         .then((res) => {
//                               setClientSecret(res?.data?.clientSecret);
//                         })
//                         .catch((err) => console.error("Payment Intent Error:", err));
//             }
//       }, [axiosSecure, totalPrice]);


//       const handleSubmit = async (event) => {
//             event.preventDefault();
//             if (!stripe || !elements) return;

//             const card = elements.getElement(CardElement);
//             if (!card) return;

//             // Payment Method 
//             const { error } = await stripe.createPaymentMethod({
//                   type: "card",
//                   card,
//             });

//             if (error) {
//                   setError(error.message);
//                   return;
//             }

//             setError("");

//             // Payment Confirm 
//             const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//                   payment_method: {
//                         card,
//                         billing_details: {
//                               email: user?.email,
//                         },
//                   },
//             });

//             if (confirmError) {
//                   setError("Payment confirmation failed!");
//                   return;
//             }

//             if (paymentIntent.status === "succeeded") {
//                   setTransactionId(paymentIntent.id);
//                   setIsPaid(true);

//                   // Payment Data Backend
//                   const payment = {
//                         price: totalPrice,
//                         transactionsId: paymentIntent.id,
//                         course: coursepayment,
//                         email: user.email,
//                         date: new Date(),
//                         status: "Pending",
//                   };

//                   const res = await axiosSecure.post("/payments", payment);
//                   if (res.data?.paymentResult?.insertedId) {
//                         toast.success("Payment successful!");
//                   } else if (res.data?.alreadyPaid) {
//                         alert("You have already paid for this course and cannot purchase it again.");
//                   }
//                   navigate('/dashboard/paymentshistory')
//             }
//       };

//       return (
//             <div>
//                   <form className="max-w-screen-sm mt-6" onSubmit={handleSubmit}>
//                         <CardElement
//                               options={{
//                                     style: {
//                                           base: {
//                                                 fontSize: "18px",
//                                                 color: "#424770",
//                                                 "::placeholder": { color: "#aab7c4" },
//                                           },
//                                           invalid: { color: "#9e2146" },
//                                     },
//                               }}
//                               className="p-3 border-2 rounded border-[#23b792] focus:outline-none focus:ring mb-4"
//                         />
//                         <button
//                               disabled={!stripe || isPaid}
//                               type="submit"
//                               className={`bg-[#23b792] text-white w-full py-2 rounded-full mt-3 text-xl font ${isPaid ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
//                                     }`}
//                         >
//                               {isPaid ? "Already Paid" : "Pay"}
//                         </button>
//                         {error && <p className="text-red-500 mt-2">{error}</p>}
//                         {transactionId && (
//                               <p className="text-green-600 mt-2 text-sm tracking-wide">
//                                     Your Transaction id: {transactionId}
//                               </p>
//                         )}
//                   </form>
//             </div>
//       );
// };

// export default CheckoutForm;





import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hocks/useAxiosSecure";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const axiosSecure = useAxiosSecure();
  const elements = useElements();
  const stripe = useStripe();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Find Data
  const coursepayment = useLoaderData();
  const courseId = coursepayment?._id;

  // Price Format
  const totalPrice = coursepayment?.price || 0;

  //  localStorage if already paid
  useEffect(() => {
    const paidCourses = JSON.parse(localStorage.getItem("paidCourses")) || [];
    if (paidCourses.includes(courseId)) {
      setIsPaid(true);
      setError("You have already paid for this course.");
    }
  }, [courseId]);

  // Payment Intent
  useEffect(() => {
    if (totalPrice > 0 && !isPaid) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res?.data?.clientSecret);
        })
        .catch((err) => console.error("Payment Intent Error:", err));
    }
  }, [axiosSecure, totalPrice, isPaid]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    // Create Payment Method
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setError("");

    // Confirm Payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card,
          billing_details: {
            email: user?.email,
          },
        },
      }
    );

    if (confirmError) {
      setError("Payment confirmation failed!");
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      setIsPaid(true);

      //  Save course ID to localStorage to prevent future payments
      const paidCourses = JSON.parse(localStorage.getItem("paidCourses")) || [];
      if (!paidCourses.includes(courseId)) {
        paidCourses.push(courseId);
        localStorage.setItem("paidCourses", JSON.stringify(paidCourses));
      }

      // Send Payment Data to Backend
      const payment = {
        price: totalPrice,
        transactionsId: paymentIntent.id,
        course: coursepayment,
        email: user.email,
        date: new Date(),
        status: "Pending",
      };

      const res = await axiosSecure.post("/payments", payment);
      
      if (res.data?.paymentResult?.insertedId) {
        toast.success("Payment successful!");
      } else if (res.data?.alreadyPaid) {
        alert("You have already paid for this course and cannot purchase it again.");
      }

      navigate("/dashboard/paymentshistory");
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
          disabled={!stripe || isPaid}
          type="submit"
          className={`bg-[#23b792] text-white w-full py-2 rounded-full mt-3 text-xl font ${
            isPaid ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {isPaid ? "Already Paid" : "Pay"}
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















