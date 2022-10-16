const { useState, useEffect } = require("react")

const useToken= ()=>{
const [tokenDetails, setTokenDetails]=useState([]);
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "username": process.env.REACT_APP_USER_NAME,
        "password": process.env.REACT_APP_PASSWORD
    })
};

 useEffect(()=>{
    fetch('https://sandbox.shurjopayment.com/api/get_token',requestOptions)
    .then(res => res.json())
    .then(data => setTokenDetails(data))

},[]);
return tokenDetails;
}

export default useToken;