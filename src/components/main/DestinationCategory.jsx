
import dataCategory from "../../utils/dataCategory"

function DestinationCategory() {
  return (
    <div>
      {dataCategory.map(({citta, paese, prezzo,immagine}, index)=>(
        <div key={index}>
            <h2>{citta}</h2>
            <p>{paese}</p>
            <span>{prezzo}</span>
            <img src={immagine} alt="" />
        </div>
      ))}
    </div>
  )
}

export default DestinationCategory
