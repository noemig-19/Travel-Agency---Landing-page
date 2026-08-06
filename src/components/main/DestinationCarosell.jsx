import data from "../../utils/data"
import Carrosello from "../ui/Carrosello"

function DestinationCarosell() {

  const destinations = [...data, ...data]

  return (
    <section>
      <div className="container-carrosello">
        <div className="overflow-hidden w-full">
          <div className="flex flex-nowrap animate-scroll"  >
            {destinations.map((destination, index) => (
              <Carrosello destination={destination} key={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default DestinationCarosell
