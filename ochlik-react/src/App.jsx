import { useState } from 'react'
import ModernPrototype from './prototypes/Modern/ModernPrototype'
import BoldPrototype from './prototypes/Bold/BoldPrototype'
import ClassicPrototype from './prototypes/Classic/ClassicPrototype'
import './App.css'

function App() {
  const [currentPrototype, setCurrentPrototype] = useState(null)

  if (currentPrototype) {
    return (
      <div className="app">
        {/* Prototype Selector */}
        <div className="prototype-selector">
          <button onClick={() => setCurrentPrototype(null)}>
            ← Tillbaka till startsidan
          </button>
          <button
            className={currentPrototype === 'modern' ? 'active' : ''}
            onClick={() => setCurrentPrototype('modern')}
          >
            Modern & Minimalist
          </button>
          <button
            className={currentPrototype === 'bold' ? 'active' : ''}
            onClick={() => setCurrentPrototype('bold')}
          >
            Bold & Professional
          </button>
          <button
            className={currentPrototype === 'classic' ? 'active' : ''}
            onClick={() => setCurrentPrototype('classic')}
          >
            Classic & Trustworthy
          </button>
        </div>

        {/* Render Selected Prototype */}
        {currentPrototype === 'modern' && <ModernPrototype />}
        {currentPrototype === 'bold' && <BoldPrototype />}
        {currentPrototype === 'classic' && <ClassicPrototype />}
      </div>
    )
  }

  return (
    <div className="app landing-page">
      {/* Hero Section */}
      <section className="landing-hero">
        <div className="landing-container">
          <img src="/images/logo.gif" alt="Ochlik Bygg AB" className="landing-logo" />
          <h1>Välkommen till Ochlik Bygg AB</h1>
          <p className="landing-subtitle">Din pålitliga byggpartner sedan 2009</p>
          <p className="landing-description">
            Vi är ett familjeföretag som kombinerar traditionellt hantverk med modern byggkunskap.
            Med över 15 års erfarenhet erbjuder vi kompletta bygglösningar i Markaryd och omnejd.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="landing-values">
        <div className="landing-container">
          <h2>Våra Värderingar</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🛡️</div>
              <h3>Trygghet</h3>
              <p>Vi står för säkra och pålitliga byggprojekt där din trygghet alltid kommer först.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✅</div>
              <h3>Ansvar</h3>
              <p>Vi tar fullt ansvar för våra projekt från start till mål med högsta kvalitet.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">📚</div>
              <h3>Kunskap</h3>
              <p>Med över 15 års erfarenhet levererar vi expertis i alla byggprojekt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="landing-references">
        <div className="landing-container">
          <h2>Referenser & Projekt</h2>
          <p className="section-subtitle">Se exempel på några av våra slutförda projekt</p>
          <div className="references-grid">
            <div className="reference-card">
              <div className="reference-image" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
              <div className="reference-content">
                <h3>Nybyggnation Villa</h3>
                <p>Komplett nybyggnation av modern villa med hög energieffektivitet och genomtänkt design.</p>
                <div className="reference-tags">
                  <span>Nybyggnation</span>
                  <span>Villa</span>
                </div>
              </div>
            </div>
            <div className="reference-card">
              <div className="reference-image" style={{ backgroundImage: "url('/images/gallery-header.jpg')" }}></div>
              <div className="reference-content">
                <h3>Takbyte & Renovering</h3>
                <p>Fullständigt takbyte med nya isolering och moderna takfönster för optimalt ljusinsläpp.</p>
                <div className="reference-tags">
                  <span>Tak</span>
                  <span>Renovering</span>
                </div>
              </div>
            </div>
            <div className="reference-card">
              <div className="reference-image" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
              <div className="reference-content">
                <h3>Totalrenovering</h3>
                <p>Omfattande renovering av äldre fastighet med fokus på modernisering och energibesparingar.</p>
                <div className="reference-tags">
                  <span>Renovering</span>
                  <span>Energi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Selector */}
      <section className="landing-prototypes">
        <div className="landing-container">
          <h2>Utforska Våra Designförslag</h2>
          <p className="section-subtitle">Välj en stil för att se hela webbplatsen</p>
          <div className="prototype-buttons">
            <button
              className="prototype-button modern"
              onClick={() => setCurrentPrototype('modern')}
            >
              <span className="button-title">Modern & Minimalist</span>
              <span className="button-desc">Ren och elegant design med fokus på innehåll</span>
            </button>
            <button
              className="prototype-button bold"
              onClick={() => setCurrentPrototype('bold')}
            >
              <span className="button-title">Bold & Professional</span>
              <span className="button-desc">Kraftfull och professionell framtoning</span>
            </button>
            <button
              className="prototype-button classic"
              onClick={() => setCurrentPrototype('classic')}
            >
              <span className="button-title">Classic & Trustworthy</span>
              <span className="button-desc">Traditionell och pålitlig estetik</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="landing-contact">
        <div className="landing-container">
          <h2>Kontakta Oss</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h3>📞 Telefon</h3>
              <p><a href="tel:0737233536">073-723 35 36</a></p>
              <p><a href="tel:0730940503">073-094 05 03</a></p>
            </div>
            <div className="contact-item">
              <h3>✉️ Email</h3>
              <p><a href="mailto:info@ochlikbygg.se">info@ochlikbygg.se</a></p>
              <p><a href="mailto:adam@ochlikbygg.se">adam@ochlikbygg.se</a></p>
            </div>
            <div className="contact-item">
              <h3>📍 Besöksadress</h3>
              <p>Hässleholmsvägen 22</p>
              <p>285 33 Markaryd</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2025 Ochlik Bygg AB. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  )
}

export default App
