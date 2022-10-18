import './App.css';
import useCheckOut from './hook/useCheckOut';
import useToken from './hook/useToken';
function App() {

const tokenDetails=useToken();
 const checkOutDetails =useCheckOut();
//const {token,store_id}= tokenDetails;
//const checkOutDetails=useCheckOut();
//const {order_id}=checkOutDetails;
 console.log(tokenDetails);
 console.log(checkOutDetails);



  return (
    <div >
      fhrehf
      {/* <SurjoPay></SurjoPay> */}
    </div>
  );
}

export default App;
