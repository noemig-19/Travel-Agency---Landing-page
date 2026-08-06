import data from "../../utils/data"


function DestinationCarosell() {

  const destinations = [...data, ...data]

  return (
    <section>
      <div className="container-carrosello">
        <div className="overflow-hidden w-full">
          <h2 className="text-2xl p-2 font-bold">Il tuo prossimo destino ti aspetta!</h2>
          <div className="flex flex-nowrap animate-scroll"  >
            {destinations.map((destination, index) => (
              <div className="shrink-0  m-2" key={index}>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={destination.immagine}
                    alt={destination.name}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute bottom-2">
                  <div className="p-8">
                    <h1 className="text-2xl font-bold text-white">{destination.citta}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default DestinationCarosell
