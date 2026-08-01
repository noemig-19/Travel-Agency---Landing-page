import dataVoli from "../../utils/dataVoli"

function CarroseloVoli() {
  return (
    <div>
      <div>
      {dataVoli.map(({compagnia, partenza}, index)=>(
        <div key={index}>
            <h2>{compagnia}</h2>
            <p>{partenza}</p>
       
        </div>
      ))}
    </div>
    </div>
  )
}

export default CarroseloVoli
