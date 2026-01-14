import PaymenOptions from "../components/payment/payment-option";
import PaymentSteps from "../components/payment/payment-steps";

const Payment = () => {
  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-30">
        <h1 className="text-5xl font-bold text-center mb-11">Payment</h1>
        <div className="grid grid-cols-2 gap-14">
          <PaymenOptions />
          <PaymentSteps />
        </div>
      </div>
    </main>
  );
};

export default Payment;
