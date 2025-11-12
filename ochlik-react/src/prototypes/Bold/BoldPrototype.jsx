import { motion } from 'framer-motion'
import { FaHardHat, FaTools, FaHome, FaShieldAlt, FaWindowMaximize, FaCog, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa'
import './Bold.css'

const BoldPrototype = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const stats = [
    { number: "15+", label: "ÅRS ERFARENHET" },
    { number: "100%", label: "KUNDNÖJDHET" },
    { number: "500+", label: "PROJEKT" },
    { number: "24/7", label: "SUPPORT" }
  ]

  const services = [
    { icon: <FaHardHat />, title: "NYBYGGNATION", desc: "Kompletta nybyggnadsprojekt från grunden. Vi hanterar allt från projektering till färdigställande med högsta kvalitet." },
    { icon: <FaTools />, title: "RENOVERING", desc: "Totalrenovering av kök, badrum och hela fastigheter. Vi förvandlar ditt hem till drömrummet." },
    { icon: <FaHome />, title: "TILLBYGGNAD", desc: "Utöka ditt hem med professionella tillbyggnader som smälter in och ökar värdet på din fastighet." },
    { icon: <FaShieldAlt />, title: "TAKARBETEN", desc: "Specialister på alla typer av takarbeten. Från reparationer till kompletta takrenovationer." },
    { icon: <FaWindowMaximize />, title: "FÖNSTERINSTALLATION", desc: "Importerar och installerar högkvalitativa fönster anpassade efter dina behov och önskemål." },
    { icon: <FaCog />, title: "SPECIALARBETEN", desc: "Betongarbeten, murverk, fasadarbeten och mycket mer. Kompletta lösningar för alla byggbehov." }
  ]

  return (
    <div className="bold-prototype">
      {/* Navigation */}
      <motion.nav
        className="bold-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <div className="logo">
            <img src="/images/logo.gif" alt="Ochlik Bygg AB" />
          </div>
          <ul className="nav-links">
            <li><a href="#hem">HEM</a></li>
            <li><a href="#tjanster">TJÄNSTER</a></li>
            <li><a href="#om-oss">OM OSS</a></li>
            <li><a href="#kontakt">KONTAKT</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero" id="hem">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              DIN <span className="highlight">BYGGPARTNER</span> I MARKARYD
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Professionella byggnadstjänster sedan 2009. Vi levererar kvalitet, trygghet och expertis i varje projekt.
            </motion.p>
            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="#kontakt"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BEGÄR OFFERT
              </motion.a>
              <motion.a
                href="#tjanster"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VÅRA TJÄNSTER
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-stats"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-box"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="tjanster">
        <div className="services-container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>VÅRA TJÄNSTER</h2>
            <div className="underline"></div>
          </motion.div>
          <motion.div
            className="services-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-box"
                variants={fadeInUp}
                whileHover={{ y: -10, borderBottomColor: "#ff6b35" }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* References Section */}
      <section className="references" id="referenser">
        <div className="references-container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>REFERENSER & PROJEKT</h2>
            <div className="underline"></div>
          </motion.div>
          <motion.div
            className="references-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="reference-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}
            >
              <div className="reference-image" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
                <div className="reference-overlay">
                  <h3>NYBYGGNATION VILLA</h3>
                </div>
              </div>
              <div className="reference-content">
                <p>Komplett nybyggnation av modern villa med hög energieffektivitet och genomtänkt design. Ett helhetsuppdrag från grunden till färdigställande.</p>
                <div className="reference-tags">
                  <span>NYBYGGNATION</span>
                  <span>VILLA</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="reference-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}
            >
              <div className="reference-image" style={{ backgroundImage: "url('/images/gallery-header.jpg')" }}>
                <div className="reference-overlay">
                  <h3>TAKBYTE & RENOVERING</h3>
                </div>
              </div>
              <div className="reference-content">
                <p>Fullständigt takbyte med nya isolering och moderna takfönster för optimalt ljusinsläpp. Professionellt utförande med garanterad kvalitet.</p>
                <div className="reference-tags">
                  <span>TAK</span>
                  <span>RENOVERING</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="reference-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}
            >
              <div className="reference-image" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
                <div className="reference-overlay">
                  <h3>TOTALRENOVERING</h3>
                </div>
              </div>
              <div className="reference-content">
                <p>Omfattande renovering av äldre fastighet med fokus på modernisering och energibesparingar. Från planering till slutbesiktning.</p>
                <div className="reference-tags">
                  <span>RENOVERING</span>
                  <span>ENERGI</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us" id="om-oss">
        <div className="why-us-container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="white">VARFÖR VÄLJA OSS?</h2>
            <div className="underline"></div>
          </motion.div>
          <div className="why-us-grid">
            <motion.div
              className="why-us-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Vår Historia</h3>
              <p>Grundat 2009 av Tomasz Ochlik har Ochlik Bygg AB utvecklats till en ledande byggfirma i Markaryd. Trots vår tillväxt har vi behållit vår familjekaraktär och personliga service som gör oss unika.</p>
              <p style={{ marginTop: '1.5rem' }}>Med över 15 års erfarenhet och hundratals nöjda kunder fortsätter vi att leverera byggprojekt av högsta kvalitet. Våra värderingar - <strong>Trygghet, Ansvar och Kunskap</strong> - genomsyrar allt vi gör.</p>
            </motion.div>
            <motion.div
              className="why-us-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ul className="feature-list">
                <motion.li whileHover={{ x: 10 }}>
                  <div className="feature-text">
                    <h4>Erfarna Hantverkare</h4>
                    <p>Alla våra medarbetare är certifierade och erfarna inom sina respektive områden.</p>
                  </div>
                </motion.li>
                <motion.li whileHover={{ x: 10 }}>
                  <div className="feature-text">
                    <h4>Kompletta Lösningar</h4>
                    <p>Goda kontakter inom el, VVS och måleri ger oss möjlighet att hantera hela projekt.</p>
                  </div>
                </motion.li>
                <motion.li whileHover={{ x: 10 }}>
                  <div className="feature-text">
                    <h4>Återkommande Kunder</h4>
                    <p>Vår höga andel återkommande kunder visar på kvaliteten i vårt arbete.</p>
                  </div>
                </motion.li>
                <motion.li whileHover={{ x: 10 }}>
                  <div className="feature-text">
                    <h4>Lokalt Förankrade</h4>
                    <p>Vi känner området och har byggt upp ett starkt förtroende i regionen.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>REDO ATT STARTA DITT PROJEKT?</h2>
          <p>Kontakta oss idag för en kostnadsfri konsultation och offert. Vi hjälper dig förverkliga dina byggdrömmar!</p>
          <motion.a
            href="#kontakt"
            className="btn-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            KONTAKTA OSS NU
          </motion.a>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="kontakt">
        <div className="contact-container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>KONTAKTA OSS</h2>
            <div className="underline"></div>
          </motion.div>
          <motion.div
            className="contact-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="contact-card" variants={fadeInUp}>
              <h3><FaPhone /> TELEFON</h3>
              <p><a href="tel:0737233536">073-723 35 36</a></p>
              <p><a href="tel:0730940503">073-094 05 03</a></p>
            </motion.div>
            <motion.div className="contact-card" variants={fadeInUp}>
              <h3><FaEnvelope /> EMAIL</h3>
              <p><a href="mailto:info@ochlikbygg.se">info@ochlikbygg.se</a></p>
              <p><a href="mailto:adam@ochlikbygg.se">adam@ochlikbygg.se</a></p>
            </motion.div>
            <motion.div className="contact-card" variants={fadeInUp}>
              <h3><FaMapMarkerAlt /> BESÖK OSS</h3>
              <p>Hässleholmsvägen 22</p>
              <p>285 33 Markaryd</p>
            </motion.div>
            <motion.div className="contact-card" variants={fadeInUp}>
              <h3><FaFacebook /> <FaInstagram /> SOCIALA MEDIER</h3>
              <p>Facebook: OTB Bygg AB</p>
              <p>Instagram: @ochlikbygg</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Ochlik Bygg AB. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  )
}

export default BoldPrototype
