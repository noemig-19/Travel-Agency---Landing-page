/**
 * header section
 */
import Nav from "./components/header/Nav"
import Header from "./components/header/Header"
import CardSection from "./components/main/CardSection"
/**
 * 
import DestinationCategory from "./components/main/DestinationCategory"
 import CarroseloVoli from "./components/main/CarroseloVoli"
 import CarroselloHotels from "./components/main/CarroselloHotels"
import CarroselloRentCar from "./components/main/CarroselloRentCar"*/


import DestinationCarosell from "./components/main/DestinationCarosell"



function App() {
  

  return (
    <>
   <Nav/>
   <Header/>
   <CardSection/>
   {
    /**
   <DestinationCategory/> <CarroseloVoli/>
  <CarroselloHotels/>
   <CarroselloRentCar/> */
   }
 <DestinationCarosell/>
   
   
   
    </>
  )
}

export default App
