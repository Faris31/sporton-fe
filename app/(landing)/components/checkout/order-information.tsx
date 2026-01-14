import CardWidthHeader from "../ui/card-witdh-header";

const OrderInformation = () => {
  return (
    <CardWidthHeader title="Order Indformation">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="full_name">Full Name</label>
          <input type="text" placeholder="Type your full name" id="full_name" />
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
            rows={10}
          />
        </div>
      </div>
    </CardWidthHeader>
  );
};

export default OrderInformation;
