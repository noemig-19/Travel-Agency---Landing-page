
function Header() {
  return (
<section className="bg-[url(assets/spiaggia-2.jpg)] bg-cover bg-bottom min-h-screen ">
<div className="flex flex-col justify-center gap-8 max-w-5xl m-auto">
    <h1 className="text-6xl font-bold text-neutral-50 text-center mt-50">
        Trova il tuo prossimo viaggio
    </h1>
    <h2 className="text-2xl font-medium text-emerald-50 text-center">
      Cerca tra le migliori occasioni tra Hotels, voli e molto altro...
    </h2>
</div>
<div>
  <div className="bg-white absolute bottom-0 mx-50 w-5xl p-8">
    <div className="badges">hotels</div>
    <div className="badges">voli</div>
    <div className="badges">autonoleggi</div>
  </div>

</div>
  
</section>
  )
}

export default Header
