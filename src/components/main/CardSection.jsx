
function CardSection() {
    return (
        <section className="w-screen flex justify-center gap-8 p-4 my-20">
            <div className="card-main bg-[url(./assets/car-1.jpg)] ">
                <h1 className=" text-white/70 font-bold mt-12">
                    Voli, hotel e auto in un click
                </h1>
                <h2 className="text-2xl font-extrabold text-white p-4">
                    Organizza il tuo viaggio su misura e risparmia fino al <span className="text-4xl font-serif">30%</span> prenotando tutto.
                </h2>
                <button className="button-card-section">Scopri di piu</button>
            </div>
            <div className="card-main bg-[url(./assets/card-2.jpg)]"> 
                <h1 className=" text-white/70 font-bold mt-12">
                    Pacchetti su misura per te
                </h1>
                <h2 className="text-2xl font-extrabold text-white p-4">
                    Combina volo, hotel e noleggio auto e ottieni fino a <span className="text-4xl font-serif">50$</span>  di sconto extra.
                </h2>
                <button className="button-card-section">Scopri di piu</button>
            </div>
            <div className="card-main bg-[url(./assets/spiaggia.jpg)]"> 
                <h1 className=" text-white/70 font-bold mt-12">
                    Viaggia senza pensieri
                </h1>
                <h2 className="text-2xl font-extrabold text-white p-4">
                    Prenota volo, alloggio e trasporto in un'unica piattaforma, con le migliori tariffe garantite.
                </h2>
                <button className="button-card-section">Scopri di piu</button>
            </div>
        </section>
    )
}

export default CardSection
