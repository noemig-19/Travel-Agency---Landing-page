import CardSection from "../components/main/CardSection"
import CittaCarrosello from "../components/main/CittaCarrosello"
/*
import DestinationCategory from "./components/main/DestinationCategory"
 import CarroseloVoli from "./components/main/CarroseloVoli"
 import CarroselloHotels from "./components/main/CarroselloHotels"
import CarroselloRentCar from "./components/main/CarroselloRentCar"
*/
import DestinationCarosell from "../components/main/DestinationCarosell"
import Header from "../components/header/Header"

function Home() {
  return (
    <div>
        <Header/>
        <CardSection />
        {
          /**
         <DestinationCategory/> <CarroseloVoli/>
        <CarroselloHotels/>
         <CarroselloRentCar/> 
         */
        }
        <DestinationCarosell />
        <CittaCarrosello />
    </div>
  )
}

export default Home
