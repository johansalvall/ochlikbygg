import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaShieldAlt, FaHandshake, FaBook } from 'react-icons/fa'
import './Classic.css'

const ClassicPrototype = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const services = [
    {
      title: "Nybyggnation & Ombyggnad",
      desc: "Vi hanterar alla aspekter av nybyggnation och ombyggnad med expertis och precision.",
      items: ["Kompletta nybyggnadsprojekt", "Ombyggnationer", "Tillbyggnationer", "Projektering och design"]
    },
    {
      title: "Renovering",
      desc: "Förnya och förbättra ditt hem med våra professionella renoveringstjänster.",
      items: ["Köksrenovering", "Badrumsrenovering", "Totalrenovering", "Fasadarbeten och målning"]
    },
    {
      title: "Tak & Isolering",
      desc: "Specialister på takarbeten och isolering för ett välisolerat och vädertätt hem.",
      items: ["Takrenovering och reparation", "Byte av takbeläggning", "Tilläggsisolering", "Takfönster installation"]
    },
    {
      title: "Fönster & Dörrar",
      desc: "Vi importerar och installerar högkvalitativa fönster och dörrar anpassade efter dina behov.",
      items: ["Fönsterinstallation", "Dörrbyte", "Energieffektiva lösningar", "Anpassad design"]
    },
    {
      title: "Betong & Murverk",
      desc: "Professionella betong- och murverksarbeten för en stabil grund.",
      items: ["Betongarbeten", "Grundläggning", "Murverk", "Stenfasader"]
    },
    {
      title: "Utomhusarbeten",
      desc: "Skapa drömträdgården och den perfekta uteplatsen.",
      items: ["Altaner och uteplatser", "Stängsel och skärmar", "Trädgårdsmurar", "Trädäck"]
    }
  ]

  return (
    <div className="classic-prototype">
      {/* Top Bar */}
      <motion.div
        className="top-bar"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="top-bar-container">
          <div>
            <a href="tel:0737233536"><FaPhone /> 073-723 35 36</a>
            <a href="mailto:info@ochlikbygg.se"><FaEnvelope /> info@ochlikbygg.se</a>
          </div>
          <div>
            <FaMapMarkerAlt /> Hässleholmsvägen 22, Markaryd
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="nav-container">
          <div className="logo-container">
            <div className="logo">
              <img src="/images/logo.gif" alt="Ochlik Bygg AB" />
            </div>
            <div className="tagline">Byggdrömmar sedan 2009</div>
          </div>
          <ul className="nav-links">
            <li><a href="#hem">Hem</a></li>
            <li><a href="#tjanster">Tjänster</a></li>
            <li><a href="#om-oss">Om Oss</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero" id="hem">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Välkommen till Ochlik Bygg
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Din pålitliga byggpartner i Markaryd sedan 2009
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Vi förverkligar dina byggdrömmar med kvalitet, omsorg och över 15 års erfarenhet. Från nybyggnation till renovering - vi finns här för dig.
          </motion.p>
          <motion.a
            href="#kontakt"
            className="btn-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontakta oss för offert
          </motion.a>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="values-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Våra Grundvärden
          </motion.h2>
          <motion.p
            className="values-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Det som gör oss till din bästa val för byggprojekt
          </motion.p>
          <motion.div
            className="values-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="value-item"
              variants={fadeIn}
              whileHover={{ y: -5, borderColor: "#6b8e23", boxShadow: "0 15px 35px rgba(0,0,0,0.15)" }}
            >
              <div className="value-icon"><FaShieldAlt /></div>
              <h3>Trygghet</h3>
              <p>Vi står för säkra, pålitliga byggprojekt där din trygghet alltid kommer först. Varje projekt genomförs med största omsorg och enligt alla säkerhetsföreskrifter.</p>
            </motion.div>
            <motion.div
              className="value-item"
              variants={fadeIn}
              whileHover={{ y: -5, borderColor: "#6b8e23", boxShadow: "0 15px 35px rgba(0,0,0,0.15)" }}
            >
              <div className="value-icon"><FaHandshake /></div>
              <h3>Ansvar</h3>
              <p>Vi tar fullt ansvar för våra projekt från första spadtaget till sista efterkontrollen. Ditt förtroende är vår främsta tillgång.</p>
            </motion.div>
            <motion.div
              className="value-item"
              variants={fadeIn}
              whileHover={{ y: -5, borderColor: "#6b8e23", boxShadow: "0 15px 35px rgba(0,0,0,0.15)" }}
            >
              <div className="value-icon"><FaBook /></div>
              <h3>Kunskap</h3>
              <p>Med 15 års branscherfarenhet och kontinuerlig vidareutbildning levererar vi expertis och kvalitet i varje projekt.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="om-oss">
        <div className="about-container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Familjeföretaget med <span className="highlight">professionell touch</span></h2>
            <p>Ochlik Bygg AB grundades 2009 av Tomasz Ochlik med en vision om att kombinera hantverkets tradition med modern byggkunskap. Vad som började som ett litet familjeföretag har vuxit till en etablerad och respekterad byggfirma i Markaryd och omnejd.</p>
            <p>Trots vår tillväxt har vi behållit det som gör oss unika - vår familjekaraktär, personliga service och genuina omsorg om varje projekt. Vi är stolta över att många av våra kunder återkommer, vilket vittnar om vårt engagemang för kvalitet och kundnöjdhet.</p>
            <motion.div
              className="company-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4>Vårt Nätverk</h4>
              <p>Genom goda kontakter inom el, VVS och måleri kan vi erbjuda kompletta lösningar för alla typer av byggprojekt - från idé till färdigställande.</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="tjanster">
        <div className="services-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Våra Tjänster</h2>
            <p>Kompletta byggnadslösningar för hem och företag</p>
          </motion.div>
          <motion.div
            className="services-list"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-item"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-details">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* References Section */}
      <section className="references" id="referenser">
        <div className="references-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Referenser & Projekt</h2>
            <p>Se några av de projekt vi genomfört med stolthet</p>
          </motion.div>
          <motion.div
            className="references-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="reference-item"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
            >
              <div className="reference-image" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
              <div className="reference-content">
                <h3>Nybyggnation Villa</h3>
                <p>Komplett nybyggnation av en modern villa med hög energieffektivitet och genomtänkt design. Ett helhetsuppdrag där vi följde projektet från idé till inflyttning.</p>
                <div className="reference-meta">
                  <span>Nybyggnation</span>
                  <span>•</span>
                  <span>Villa</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="reference-item"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
            >
              <div className="reference-image" style={{ backgroundImage: "url('/images/gallery-header.jpg')" }}></div>
              <div className="reference-content">
                <h3>Takbyte & Renovering</h3>
                <p>Fullständigt takbyte med ny isolering och moderna takfönster för optimalt ljusinsläpp. Professionellt utförande med fokus på långsiktig kvalitet och energieffektivitet.</p>
                <div className="reference-meta">
                  <span>Takarbeten</span>
                  <span>•</span>
                  <span>Renovering</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="reference-item"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
            >
              <div className="reference-image" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
              <div className="reference-content">
                <h3>Totalrenovering</h3>
                <p>Omfattande renovering av äldre fastighet med fokus på modernisering och energibesparingar. Från planering till slutbesiktning med noggrant genomförande i varje steg.</p>
                <div className="reference-meta">
                  <span>Renovering</span>
                  <span>•</span>
                  <span>Energieffektivisering</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <motion.div
          className="testimonial-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="quote">"Att arbeta med familjens värderingar - trygghet, ansvar och kunskap - är vad som gör varje projekt personligt för oss. Vi behandlar varje byggprojekt som om det vore vårt eget hem."</p>
          <p className="quote-author">- Tomasz Ochlik, Grundare</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="kontakt">
        <div className="contact-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Kontakta Oss</h2>
            <p>Vi finns här för att svara på dina frågor och hjälpa dig med ditt byggprojekt</p>
          </motion.div>
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="info-item">
                <h4><FaPhone /> Telefon</h4>
                <p><a href="tel:0737233536">073-723 35 36</a></p>
                <p><a href="tel:0730940503">073-094 05 03</a></p>
              </div>
              <div className="info-item">
                <h4><FaEnvelope /> E-post</h4>
                <p><a href="mailto:info@ochlikbygg.se">info@ochlikbygg.se</a></p>
                <p><a href="mailto:adam@ochlikbygg.se">adam@ochlikbygg.se</a></p>
              </div>
              <div className="info-item">
                <h4><FaMapMarkerAlt /> Besöksadress</h4>
                <p>Hässleholmsvägen 22</p>
                <p>285 33 Markaryd</p>
              </div>
              <div className="info-item">
                <h4><FaClock /> Öppettider</h4>
                <p>Måndag - Fredag: 07:00 - 17:00</p>
                <p>Kontakta oss gärna för akuta ärenden</p>
              </div>
            </motion.div>
            <motion.div
              className="contact-map"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Om Ochlik Bygg</h4>
              <p>Sedan 2009 har vi hjälpt familjer och företag i Markaryd med professionella byggnadstjänster. Våra värderingar - trygghet, ansvar och kunskap - genomsyrar allt vi gör.</p>
            </div>
            <div className="footer-section">
              <h4>Snabblänkar</h4>
              <a href="#hem">Hem</a>
              <a href="#tjanster">Våra Tjänster</a>
              <a href="#om-oss">Om Oss</a>
              <a href="#kontakt">Kontakt</a>
            </div>
            <div className="footer-section">
              <h4>Sociala Medier</h4>
              <p>Facebook: OTB Bygg AB</p>
              <p>Instagram: @ochlikbygg</p>
              <p style={{ marginTop: '1rem' }}>Följ oss för inspiration och uppdateringar om våra projekt!</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Ochlik Bygg AB. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ClassicPrototype
