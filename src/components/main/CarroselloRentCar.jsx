
import dataRentCars from "../../utils/dataRentCars"
function CarroselloRentCar() {
  return (
    <div>
      <div>
      {dataRentCars.map(({azienda, modello, categoria}, index)=>(
        <div key={index}>
            <h2>{azienda}</h2>
            <p>{modello}</p>
            <span>{categoria}</span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default CarroselloRentCar
