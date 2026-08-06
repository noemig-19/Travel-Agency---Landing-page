/**
 * componente reutilizabile per mostrare i Carrosello di immagini di:
 * VOLI,MACCHINE,HOTELS
 */



function Carrosello({ destination = {}}) {

    return (
        <>

            <div className="w-full">
                <div className="w-xl mb-4 m-2">
                    <img src={destination.immagine} alt={destination.name} className="bg-center bg-contain rounded-xl h-80"  />
                </div>

                <h1>{destination.citta}</h1>

                <span> {destination.prezzo}</span>
            </div>

        </>
    )
}

export default Carrosello
