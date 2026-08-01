/**
 * header section
 */
import Nav from "./components/header/Nav"
import Header from "./components/header/Header"
import CardSection from "./components/main/CardSection"
import DestinationCarosell from "./components/main/DestinationCarosell"
import DestinationCategory from "./components/main/DestinationCategory"
import CarroselloHotels from "./components/main/CarroselloHotels"
import CarroselloRentCar from "./components/main/CarroselloRentCar"
import CarroseloVoli from "./components/main/CarroseloVoli"



function App() {
  

  return (
    <>
   <Nav/>
   <Header/>
   <CardSection/>
   <DestinationCarosell/>
   <DestinationCategory/>
   <CarroselloHotels/>
   <CarroselloRentCar/>
   <CarroseloVoli/>
   
    </>
  )
}

export default App
