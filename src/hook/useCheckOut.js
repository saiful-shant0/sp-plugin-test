import { useEffect, useState } from "react";

import useToken from "./useToken";

const useCheckOut=()=>{
    const [ip, setIp] = useState("");
    const [checkOutDetails, setCheckOutDetails]=useState([]);

    const tokenDetails=useToken();

    fetch("https://get-ip-only.herokuapp.com/")
    .then((req) => req.json())
    .then((res) => setIp(res.ip));
  const userData=  localStorage.getItem(userData);
    const {token,store_id}= tokenDetails;
     const {amount,name,address,phone,city,postal,currency}=userData;
    //console.log(ip)
  

    const requestOptions = {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prefix: process.env.REACT_APP_PREFIX,
            store_id: store_id,
            token: token,
            return_url:  process.env.REACT_APP_RETURN_URL,
            cancel_url: process.env.REACT_APP_CANCLE_URL,
            amount: amount,
            order_id:  process.env.REACT_APP_ORDER_ID,
            currency: currency,
            customer_name: name,
            customer_address: address,
            customer_phone: phone,
            customer_city: city,
            customer_post_code:postal,
            client_ip: ip })
    };

    useEffect(()=>{
        fetch('https://www.sandbox.shurjopayment.com/api/secret-pay',requestOptions)
        .then(res => res.json())
        .then(data =>{ console.log(data)
            setCheckOutDetails(data)
        })
    
    },[]);
    return checkOutDetails;
    
}

export default useCheckOut;

