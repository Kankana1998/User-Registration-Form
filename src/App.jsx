import { useState } from 'react'
import './App.css'
import AddressDetail from './components/AddressDetail'
import PersonalDetails from './components/PersonalDetails'


function App() {
  
const [currentPage, setcurrentPage] = useState(1);
const handleNext =() => {
  setcurrentPage(2);
};

  return (
    <>
    {
      currentPage === 1 ? (
        <PersonalDetails onNext={handleNext}  />
      ) : (
        <AddressDetail />
      )
    }
   
    </>
  )
}

export default App
