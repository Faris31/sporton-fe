const OrderInformation = () => {
    return (
      <div className="bg-white">
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="font-bold text-lg">Order Information</h2>
        </div>
        <div className="p-5">
          <div className="input-group">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              placeholder="Type your full name"
              id="full_name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="wa_number">Whatsapp Number</label>
            <input
              type="text"
              placeholder="Type your whatsapp number +62xxxx"
              id="wa_number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="shipping_address">Shipping Address</label>
            <textarea
                placeholder="Type your shipping address"
                id="shipping_address"
                rows={7}
            />
          </div>
        </div>
      </div>
    );
}

export default OrderInformation;