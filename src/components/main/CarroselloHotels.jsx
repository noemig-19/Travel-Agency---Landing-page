import dataHotel from "../../utils/dataHotels"

function CarroselloHotels() {
  return (
    <div>
      <div>
      {dataHotel.map(({citta, paese, valutazione}, index)=>(
        <div key={index}>
            <h2>{citta}</h2>
            <p>{paese}</p>
            <span>{valutazione}</span>
           
        </div>
      ))}
    </div>
    </div>
  )
}

export default CarroselloHotels
