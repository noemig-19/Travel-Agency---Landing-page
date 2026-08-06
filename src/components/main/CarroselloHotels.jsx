import dataHotel from "../../utils/dataHotels"
import Carrosello from "../ui/Carrosello"

function CarroselloHotels() {
const hotels = [...dataHotel, ...dataHotel]

  return (
     <div className="conteiner">
        <div className="overflow-hidden w-full">
          <div className="flex whitespace-nowrap">
 {hotels.map((hotel, index) =>(
        <Carrosello hotel={hotel} key={index}/>
      ))}
          </div>
          </div>
          </div>

  )
}

export default CarroselloHotels
