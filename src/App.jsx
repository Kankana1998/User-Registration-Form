import { useState } from 'react'
import './App.css'
import AddressDetail from './components/AddressDetail'
import PersonalDetails from './components/PersonalDetails'
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import DataTable from 'datatables.net-dt';


function App() {
  const [addressSubmitted, setAddressSubmitted] = useState(false);
const [currentPage, setcurrentPage] = useState(1);

const handleAddressSubmit = () => {
  setAddressSubmitted(true);
};
const handleNext =() => {
  setcurrentPage(2);
};

  return (
    <>
    <Provider store={store}>
    {
      currentPage === 1 ? (
        <PersonalDetails onNext={handleNext}  />
      ) : (

          <AddressDetail />  
   
           
        
        
      )
    }
    </Provider>
    </>
  )
}

export default App
