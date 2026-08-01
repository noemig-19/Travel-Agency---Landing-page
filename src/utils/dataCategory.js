
const dataCategory = [
  // SETTIMANA AL MARE
  {
    id: 1,
    categoria: "Settimana al Mare",
    citta: "Ibiza",
    paese: "Spagna",
    prezzo: 349,
    durata: "7 giorni",
    descrizione: "Spiagge cristalline, tramonti indimenticabili e relax totale sull'isola.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsL5fs-DMv6ZbfJPBBHy06twE-l9rpQW2wX6ergInlWQ&s=10"
  },
  {
    id: 2,
    categoria: "Settimana al Mare",
    citta: "Zanzibar",
    paese: "Tanzania",
    prezzo: 799,
    durata: "7 giorni",
    descrizione: "Acque turchesi e spiagge bianche in un paradiso tropicale.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6L2w-K1iWcJAjjFhgt0BzYnxegw_A1nHj4DLPN6_uw&s=10"
  },

  // MULTICITTÀ
  {
    id: 3,
    categoria: "Multicittà",
    citta: "Roma - Firenze - Venezia",
    paese: "Italia",
    prezzo: 459,
    durata: "10 giorni",
    descrizione: "Un tour tra le città più iconiche d'Italia, tra arte e storia.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zugwjf82otcR5LKT4mJcwQs78nxtmy4cr4GSuPB-MQ&s=10"
  },
  {
    id: 4,
    categoria: "Multicittà",
    citta: "Londra - Parigi - Amsterdam",
    paese: "Europa",
    prezzo: 589,
    durata: "12 giorni",
    descrizione: "Scopri tre capitali europee in un unico viaggio indimenticabile.",
    immagine: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsq1-pp3itIqSgSLNuHz9d_0RUNERl_6Xk1ug24VtaWA&s"
  },

  // CAPODANNO
  {
    id: 5,
    categoria: "Capodanno",
    citta: "New York",
    paese: "Stati Uniti",
    prezzo: 899,
    durata: "5 giorni",
    descrizione: "Festeggia il nuovo anno a Times Square, tra luci e magia.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIKSE0cmuFm0nQD2IxwJkPAyA4821w4A53ntxt8XhFw&s=10"
  },
  {
    id: 6,
    categoria: "Capodanno",
    citta: "Dubai",
    paese: "Emirati Arabi",
    prezzo: 749,
    durata: "6 giorni",
    descrizione: "Fuochi d'artificio spettacolari e lusso senza confini per l'ultimo dell'anno.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOt0co3VwJKmOsuhdFzoWnXRbNMT-aqLe83Bk2YgfDw&s=10"
  },

  // BUS E TRENO
  {
    id: 7,
    categoria: "Bus e Treno",
    citta: "Interrail Europa",
    paese: "Europa",
    prezzo: 299,
    durata: "14 giorni",
    descrizione: "Attraversa l'Europa in treno, libero di scoprire ogni tappa a modo tuo.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPAjmTg-sEmA-iEy5AQJK2D-Z7r_p9CSRcImsqn3M_A&s=10"
  },
  {
    id: 8,
    categoria: "Bus e Treno",
    citta: "Costiera Amalfitana",
    paese: "Italia",
    prezzo: 149,
    durata: "4 giorni",
    descrizione: "Un percorso panoramico in bus lungo una delle coste più belle del mondo.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6NN2vBW2QJQLkiFghwhYRGKBfNut1sXXyvwpy-fjRg&s=10"
  },

  // BUCKET LIST
  {
    id: 9,
    categoria: "Bucket List",
    citta: "Machu Picchu",
    paese: "Perù",
    prezzo: 1199,
    durata: "9 giorni",
    descrizione: "Un'avventura tra le Ande fino all'antica città Inca sospesa tra le nuvole.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjaYcjzofmBOHv9ZHeYgLz8KGTIu_SRiIuPOKqFQSwpw&s=10"
  },
  {
    id: 10,
    categoria: "Bucket List",
    citta: "Safari in Kenya",
    paese: "Kenya",
    prezzo: 1499,
    durata: "8 giorni",
    descrizione: "Vivi il Grande Migrazione e incontra la fauna selvatica africana da vicino.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DfHpoFhSEoGmwc4F9S8406WcGeqRZoq0BwiNH0Cx0Q&s=10"
  },

  // CHRISTMAS
  {
    id: 11,
    categoria: "Christmas",
    citta: "Mercatini di Vienna",
    paese: "Austria",
    prezzo: 279,
    durata: "4 giorni",
    descrizione: "Atmosfera magica tra luci natalizie, vin brulè e mercatini tradizionali.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDh1M8RNzN5vYWGtoAr7GMCGA6IHQnX0Cm7tgnRr-yw&s=10"
  },
  {
    id: 12,
    categoria: "Christmas",
    citta: "Lapponia",
    paese: "Finlandia",
    prezzo: 899,
    durata: "5 giorni",
    descrizione: "Incontra Babbo Natale e vivi un Natale da favola tra neve e renne.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcckpBCyLPQ8fkMH6TwKfqIR5uoed9zTF92FWHg1yybg&s=10"
  },

  // FRIEND (viaggio tra amici)
  {
    id: 13,
    categoria: "Friend",
    citta: "Lisbona",
    paese: "Portogallo",
    prezzo: 229,
    durata: "5 giorni",
    descrizione: "Vita notturna, spiagge e quartieri vivaci, perfetta per un viaggio tra amici.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lFDZIbB4VD1H00SBxn7uZkf-RWK63PXcr1EpQbXjpA&s=10"
  },
  {
    id: 14,
    categoria: "Friend",
    citta: "Budapest",
    paese: "Ungheria",
    prezzo: 199,
    durata: "4 giorni",
    descrizione: "Terme, locali underground e un'atmosfera perfetta per divertirsi in gruppo.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyBvEv9uYmlML9HTZ82lxwHCiIS8KdrgvI1fof-jdNA&s=10"
  },

  // COUPLE (viaggio romantico)
  {
    id: 15,
    categoria: "Coppia",
    citta: "Santorini",
    paese: "Grecia",
    prezzo: 449,
    durata: "6 giorni",
    descrizione: "Tramonti romantici e ville private per una fuga d'amore indimenticabile.",
    immagine: "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLV8SF0ZxjFXxjXCuySIOinSd5n7F9ipjMyYGsqR3Mg&s=10"
  },
  {
    id: 16,
    categoria: "Coppia",
    citta: "Maldive",
    paese: "Maldive",
    prezzo: 1299,
    durata: "7 giorni",
    descrizione: "Ville sull'acqua e privacy assoluta per una luna di miele da sogno.",
    immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YsF-HDzHXeH3EYv5EtVoc3KeeiJNZO0PTjhjgy3kWA&s=10"
  }
];

export default dataCategory;