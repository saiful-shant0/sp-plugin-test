import './App.css';
import SurjoPay from './Components/Pages/SurjoPay';
// import useCheckOut from './hook/useCheckOut';
import useToken from './hook/useToken';
function App() {

const tokenDetails=useToken();
// const checkOutDetails =useCheckOut();
const {token,store_id}= tokenDetails;
// console.log(checkOutDetails);



  return (
    <div >
      <SurjoPay></SurjoPay>

    </div>
  );
}

export default App;
