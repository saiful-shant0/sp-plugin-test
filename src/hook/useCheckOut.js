import { useEffect, useState } from "react";

import useToken from "./useToken";

const useCheckOut = () => {
  const [ip, setIp] = useState("");
  const [checkOutDetails, setCheckOutDetails] = useState([]);
  //const [user, setUser] = useState({});

  const tokenDetails = useToken();
  const { token, store_id } = tokenDetails;

  useEffect(() => {
    fetch("https://get-ip-only.herokuapp.com/")
      .then((req) => req.json())
      .then((res) => setIp(res.ip));
  }, [token]);

//   useEffect(() => {
//     fetch("http://localhost:3001/profile")
//       .then((req) => req.json())
//       .then((res) => setUser(res));
//   }, []);

//   const { amount, name, address, phone, city, postal, currency } = user;

  const requestOptions = {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prefix: process.env.REACT_APP_PREFIX,
      store_id: store_id,
      token: token,
      return_url: process.env.REACT_APP_RETURN_URL,
      cancel_url: process.env.REACT_APP_CANCLE_URL,
      amount: 10,
      order_id: process.env.REACT_APP_ORDER_ID,
      currency: "BDT",
      customer_name: "Some One",
      customer_address: "LalMatia",
      customer_phone: "015674852",
      customer_city: "Dhaka",
      customer_post_code:1207,
      client_ip: ip,
    }),
  };

  useEffect(() => {
    fetch(
      "https://www.sandbox.shurjopayment.com/api/secret-pay",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => setCheckOutDetails(data));
  }, [token]);
  return checkOutDetails;
};

export default useCheckOut;
