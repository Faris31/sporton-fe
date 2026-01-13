import OrderInformation from "../components/checkout/order-information";

const CheckOut = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-30">
                <h1 className="text-5xl font-bold text-center mb-11">
                    Checkout Now
                </h1>
            <div className="grid grid-cols-2 gap-14">
                    <div className="bg-white w-full">
                        <OrderInformation />
                </div>
                <div className="bg-white w-full"></div>
            </div>
            </div>
        </main>
    )
}

export default CheckOut;