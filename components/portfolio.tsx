'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

export function PortfolioComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio Karola</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#o-mnie" className="hover:text-blue-600">O mnie</a>
            <a href="#pan-od-plam" className="hover:text-blue-600">Pan od Plam</a>
            <a href="#sprzatanie" className="hover:text-blue-600">Sprzątanie</a>
            <a href="#muzyka" className="hover:text-blue-600">Muzyka</a>
            <a href="#kontakt" className="hover:text-blue-600">Kontakt</a>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2 flex flex-col space-y-2">
            <a href="#o-mnie" className="hover:text-blue-600">O mnie</a>
            <a href="#pan-od-plam" className="hover:text-blue-600">Pan od Plam</a>
            <a href="#sprzatanie" className="hover:text-blue-600">Sprzątanie</a>
            <a href="#muzyka" className="hover:text-blue-600">Muzyka</a>
            <a href="#kontakt" className="hover:text-blue-600">Kontakt</a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* O mnie */}
        <section id="o-mnie" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">O mnie</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="mb-4">
              Nazywam się Karol i z pasją podchodzę do każdej dziedziny mojego życia i pracy. Niezależnie od tego, czy zajmuję się praniem tapicerki, czy graniem na skrzypcach, zawsze stawiam na rozwój, najwyższą jakość usług i indywidualne podejście do klienta.
            </p>
            <p>
              Moim priorytetem jest zawsze dobro i zadowolenie klienta. Staram się dawać więcej niż tylko usługę – chcę, aby każda współpraca była przyjemnym i wartościowym doświadczeniem. Cieszę się, gdy po spotkaniu ze mną ludzie czują radość i satysfakcję. Jeśli szukasz kogoś, kto angażuje się w swoją pracę z pełnym oddaniem, jesteś we właściwym miejscu.
            </p>
            {/* Placeholder for photo */}
            <div className="mt-4 bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Miejsce na zdjęcie</span>
            </div>
          </div>
        </section>

        {/* Pan od Plam */}
        <section id="pan-od-plam" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Pan od Plam - Pranie tapicerki i wykładzin</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Oferowane usługi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Profesjonalne PRANIE MEBLI TAPICEROWANYCH</h4>
                <ul className="list-disc list-inside">
                  <li>Profesjonalne pranie kanap</li>
                  <li>Profesjonalne pranie narożników</li>
                  <li>Profesjonalne pranie foteli</li>
                  <li>Profesjonalne pranie krzeseł</li>
                  <li>Profesjonalne pranie materacy</li>
                  <li>Profesjonalne pranie poduszek meblowych</li>
                  <li>Suszenie</li>
                  <li>Impregnacja</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Pranie Wykładzin</h4>
                <ul className="list-disc list-inside">
                  <li>Profesjonalne Pranie wykładzin</li>
                  <li>Pranie wykładzin metodą ekstrakcji</li>
                  <li>Pranie wykładzin metodą enkapsulacji (minimalna ilość wody)</li>
                  <li>Suszenie wykładziny</li>
                  <li>Impregnacja</li>
                </ul>
              </div>
            </div>
            <h4 className="text-xl font-semibold mt-6 mb-2">Oferta dla firm</h4>
            <ul className="list-disc list-inside">
              <li>Pranie krzeseł konferencyjnych</li>
              <li>Pranie foteli biurowych</li>
              <li>Pranie kanap biurowych</li>
              <li>Pranie wykładzin biurowych</li>
              <li>Suszenie</li>
              <li>Impregnacja</li>
              <li>(możliwe wykonywanie usługi w godzinach nocnych)</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Cennik</h3>
            <ul className="list-disc list-inside">
              <li>Pranie kanapy/wersalki od 150zł</li>
              <li>Pranie narożnika od 200zł</li>
              <li>Pranie fotela od 40zł</li>
              <li>Pranie Krzesła od 20zł</li>
              <li>Pranie poduszki od 15zł</li>
              <li>Pranie materaca od 80zł</li>
              <li>Pranie wykładzin domowych od 18zł za m2</li>
            </ul>
            <p className="mt-4">
              Na cenę usługi wpływa: wielkość mebla, stopień zabrudzenia, kształt mebla, czas pracy.
              Usługi dla firm są wyceniane indywidualnie.
            </p>
            {/* Placeholder for photos */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Zdjęcie 1</span>
              </div>
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Zdjęcie 2</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sprzątanie */}
        <section id="sprzatanie" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Czysta podłoga bez wysiłku</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Bezprzewodowe urządzenie do sprzątania</h3>
            <p className="mb-4">
              Oferuję sprzęt, który myje, odkurza i suszy w jednym kroku. Nie musisz już zamiatać przed myciem – urządzenie dokładnie usuwa zarówno suche, jak i mokre zanieczyszczenia.
            </p>
            <p className="mb-4">
              Dzięki dwóm zbiornikom na czystą i brudną wodę, wałek jest cały czas płukany, więc zawsze sprzątasz czystym wałkiem, a podłoga lśni. Na dodatek, urządzenie po myciu automatycznie suszy podłogę.
            </p>
            <p className="font-semibold">
              Jeśli Cię to interesuje, zadzwoń. Chętnie opowiem więcej!
            </p>
            <p className="mt-4">
              Tel: 661094441
            </p>
            {/* Placeholder for product photo */}
            <div className="mt-6 bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Zdjęcie urządzenia</span>
            </div>
          </div>
        </section>

        {/* Muzyka */}
        <section id="muzyka" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Usługi muzyczne</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-500 italic">
              Ta sekcja jest w trakcie tworzenia. Wkrótce pojawią się tutaj informacje o moich usługach muzycznych.
            </p>
            {/* Placeholder for music-related content */}
            <div className="mt-6 bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Miejsce na treści związane z muzyką</span>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Phone className="mr-2" />
              <span>661 094 441</span>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="mr-2" />
              <span>twoj.email@example.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>Twoja lokalizacja</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Portfolio Karola. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}