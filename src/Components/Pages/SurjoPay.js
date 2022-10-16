import React, { useState } from "react";
import "../../hook/useCheckOut.js";
import "./Surjopay.css";

const SurjoPay = () => {
  const [inputs, setInputs] = useState({});
  

  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();

   
    localStorage.setItem('userData', JSON.stringify(inputs))
    
  
  };
  return (
    <div className="add-service my-5 container">
      <img
        className="mb-3"
        src="https://sandbox.shurjopayment.com/assets/payment_icon/shurjopay-logo.png"
        alt=""
      />
      <form onSubmit={handleSubmit}>
        <label>
          <p id="input-heading">
            Amount<span className="text-danger">*</span>
          </p>
          <input
            type="number"
            name="amount"
            value={inputs.amount || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p>
            Customer Name<span className="text-danger">*</span>
          </p>
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p>
            Customer Phone No<span className="text-danger">*</span>
          </p>
          <input
            type="text"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p>
            Customer City<span className="text-danger">*</span>
          </p>
          <input
            type="text"
            name="city"
            value={inputs.city || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p>
            Customer Address<span className="text-danger">*</span>
          </p>
          <textarea
            type="text"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p>
            Postal Code<span className="text-danger">*</span>
          </p>
          <input
            type="text"
            name="postal"
            value={inputs.postal || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p> Customer Email</p>
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>
            Currency<span className="text-danger">*</span>
          </p>
          <select name="currency" onChange={handleChange} required>
            <option value="">Please Selcect One</option>
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
          </select>
        </label>
        <input className="btn btn-success my-3" type="submit" />
      </form>
    </div>
  );
};

export default SurjoPay;
