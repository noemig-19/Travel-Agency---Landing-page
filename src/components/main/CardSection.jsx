
function CardSection() {
    return (
        <section className="w-screen flex justify-center gap-8 p-4 my-20">
            <div className="card-main bg-[url(./assets/car-1.jpg)] bg-cover ">
                <h1>
                    Voli, hotel e auto in un click
                </h1>
                <h2>
                    Organizza il tuo viaggio su misura e risparmia fino al 30% prenotando tutto insieme.
                </h2>
            </div>
            <div className="card-main bg-[url(./assets/card-2.jpg)] bg-cover"> 
                <h1>
                    Pacchetti su misura per te
                </h1>
                <h2>
                    Combina volo, hotel e noleggio auto e ottieni fino a €50 di sconto extra.
                </h2>
            </div>
            <div className="card-main bg-[url(./assets/spiaggia.jpg)] bg-cover"> 
                <h1>
                    Viaggia senza pensieri
                </h1>
                <h2>
                    Prenota volo, alloggio e trasporto in un'unica piattaforma, con le migliori tariffe garantite.
                </h2>
            </div>
        </section>
    )
}

export default CardSection
