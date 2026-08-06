/**
 * componente reutilizabile per mostrare i Carrosello di immagini di:
 * VOLI,MACCHINE,HOTELS
 */



function Carrosello({ destination = {}}) {

    return (
          <div className="shrink-0  m-2">
      <div className="rounded-xl overflow-hidden">
        <img
          src={destination.immagine}
          alt={destination.name}
          className="w-full h-80 object-cover rounded-xl"
        />
        <h1>{destination.citta}</h1>
        <span>{destination.prezzo}</span>
      </div>
    </div>
    )
}

export default Carrosello
