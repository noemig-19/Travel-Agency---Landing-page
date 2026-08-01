import data from "../../utils/data"

function DestinationCarosell() {
  return (
   <section>
    {
      data.map(({citta, paese,prezzo, descrizione, immagine}, i) =>(
        <div key={i}>
          <img src={immagine} alt="" />
          <h1>{citta}</h1>
          <p>{paese}</p>
          <span>${prezzo}</span>
          <p>{descrizione}</p>
        </div>

      ))
    }
   </section>
  )
}

export default DestinationCarosell
