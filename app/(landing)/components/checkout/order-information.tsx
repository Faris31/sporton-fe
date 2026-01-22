"use client";

import React, { useState } from "react";
import CardWidthHeader from "../ui/card-witdh-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <CardWidthHeader title="Order Indformation">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            type="text"
            placeholder="Type your full name"
            id="customerName"
            name="customerName"
            onChange={handleInputChange}
            value={formData.customerName}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerContact">Whatsapp Number</label>
          <input
            type="text"
            placeholder="Type your whatsapp number +62xxxx"
            id="customerContact"
            name="customerContact"
            onChange={handleInputChange}
            value={formData.customerContact ?? ""}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea
            placeholder="Type your shipping address"
            id="customerAddress"
            name="customerAddress"
            rows={10}
            onChange={handleInputChange}
            value={formData.customerAddress}
          />
        </div>
      </div>
    </CardWidthHeader>
  );
};

export default OrderInformation;
