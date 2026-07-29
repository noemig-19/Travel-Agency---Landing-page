/**
 * aggiungere funzionalita: cambiare schermata se l'user seleziona Hotels, Voli, Autonoleggi
 * c
 */


function Header() {
  return (
    /**
     * set: Albergo
     */
    <section className="bg-[url(assets/spiaggia-2.jpg)] bg-cover bg-bottom h-124s ">
      <div className="flex flex-col justify-center gap-8 max-w-5xl m-auto">
        <h1 className="text-6xl font-bold text-neutral-50 text-center mt-50">
          Trova il tuo prossimo viaggio
        </h1>
        <h2 className="text-2xl font-medium text-emerald-50 text-center">
          Cerca tra le migliori occasioni tra Hotels, voli e molto altro...
        </h2>
      </div>
      <div>
        <div className="bg-neutral-200 pt-4 mx-50 w-5xl p-8 rounded-2xl flex flex-col gap-6">
          <div className="flex justify-center gap-8 pb-4">
            <span className="badges">hotels</span>
            <span className="badges">voli</span>
            <span className="badges">autonoleggi</span>
          </div>
          <div className="flex gap-8 m-auto">
            <div className="flex flex-col justify-center gap-4">
              <span>Scegli la destinazione</span>
              <input type="text" className="bg-white p-2 rounded-2xl " placeholder="Dove stai andando?"/>
            </div>
            <div className="flex flex-col gap-4">
              <span>Seleziona date</span>
              <input type="date" className="bg-white p-2 rounded-2xl " />
            </div>
            <div className="flex flex-col gap-4">
              <span>Seleziona allogi e ospiti</span>
              <div>
                <input type="text"  className="bg-white p-2 rounded-2xl " placeholder="2 adulti · 0 bambini · 1 camera" />

              </div>

            </div>
          </div>
          <button className="px-4 py-2 bg-emerald-800 rounded-4xl cursor-pointer hover:bg-emerald-600 transition duration-300  text-white w-full">Trova Hotels</button>
        </div>

      </div>

    </section>
  )
}

export default Header
