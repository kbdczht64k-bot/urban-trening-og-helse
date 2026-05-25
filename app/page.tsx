export default function UrbanTreningPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
              Urban Trening
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Sterkere kropp.
              <br />
              Bedre kapasitet.
              <br />
              Ingen bullshit.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Personlig trening for deg som vil bygge styrke, bli mer atletisk
              og få strukturert oppfølging. Tilpasset både nybegynnere og
              erfarne løftere.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
  href="https://instagram.com/pt_nicourban"
  target="_blank"
  className="bg-black text-white px-6 py-3 rounded-2xl text-sm font-medium hover:opacity-90 transition inline-block"
>
  Book konsultasjon
</a>

              <button className="border border-gray-300 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-gray-100 transition">
                Se tjenester
              </button>
            </div>
          </div>

          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Nico Profil.JPG"
                alt="Trening"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Hva du får
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Fokus på progresjon, teknikk og resultater som faktisk varer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">
                Personlig oppfølging
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Individuelt tilpassede programmer basert på mål, nivå og
                kapasitet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">
                Styrke og prestasjon
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Fokus på baseøvelser, teknikk og målbar progresjon.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">
                Livsstil og struktur
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Rutiner og vaner som gjør at resultatene holder over tid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klar for å ta treningen seriøst?
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Urban Trening hjelper deg med struktur, ansvarlighet og resultater.
            Ingen tilfeldige programmer. Ingen unødvendig kompleksitet.
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-2xl text-sm font-medium hover:opacity-90 transition">
            Kontakt Urban Trening
          </button>
        </div>
      </section>
    </div>
  )
}