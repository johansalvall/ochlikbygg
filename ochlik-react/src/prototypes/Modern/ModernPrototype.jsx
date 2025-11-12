import { motion } from 'framer-motion'
import { FaShieldAlt, FaCheckCircle, FaBolt, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Modern.css'

const ModernPrototype = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="modern-prototype">
      {/* Navigation */}
      <motion.nav
        className="modern-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <div className="logo">
            <img src="/images/logo.gif" alt="Ochlik Bygg AB" />
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Byggdrömmar Blir Verklighet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Sedan 2009 - Trygghet, Ansvar och Kunskap
          </motion.p>
          <motion.a
            href="#kontakt"
            className="cta-button"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontakta Oss
          </motion.a>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="values">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Våra Värderingar
        </motion.h2>
        <motion.div
          className="values-grid"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-icon"><FaShieldAlt /></div>
            <h3>Trygghet</h3>
            <p>Vi står för säkra och pålitliga byggprojekt där din trygghet alltid kommer först.</p>
          </motion.div>
          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-icon"><FaCheckCircle /></div>
            <h3>Ansvar</h3>
            <p>Vi tar fullt ansvar för våra projekt från start till mål med högsta kvalitet.</p>
          </motion.div>
          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-icon"><FaBolt /></div>
            <h3>Kunskap</h3>
            <p>Med över 15 års erfarenhet levererar vi expertis i alla byggprojekt.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services" id="tjanster">
        <div className="services-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Våra Tjänster
          </motion.h2>
          <motion.div
            className="services-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="service-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <h3>Nybyggnation & Ombyggnad</h3>
              <p>Från grundläggning till färdigt hus. Vi hjälper er förverkliga era byggdrömmar med professionell projektering och utförande.</p>
              <ul className="service-list">
                <li>Nybyggnation</li>
                <li>Ombyggnation</li>
                <li>Tillbyggnationer</li>
              </ul>
            </motion.div>
            <motion.div
              className="service-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <h3>Tak & Fönster</h3>
              <p>Specialister på takarbeten och fönsterinstallationer. Vi använder erfarna hantverkare och importerar egna fönster.</p>
              <ul className="service-list">
                <li>Takarbeten</li>
                <li>Fönsterinstallation</li>
                <li>Takrenovering</li>
              </ul>
            </motion.div>
            <motion.div
              className="service-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <h3>Renovering & Underhåll</h3>
              <p>Kompletta renoveringstjänster för kök, badrum och hela fastigheter.</p>
              <ul className="service-list">
                <li>Köksrenovering</li>
                <li>Fasadarbeten</li>
                <li>Golvläggning</li>
                <li>Målning</li>
              </ul>
            </motion.div>
            <motion.div
              className="service-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <h3>Specialarbeten</h3>
              <p>Vi erbjuder ett brett utbud av specialiserade byggtjänster med goda kontakter inom el, VVS och måleri.</p>
              <ul className="service-list">
                <li>Betongarbeten</li>
                <li>Murverk</li>
                <li>Altaner & Uteplats</li>
                <li>Stängsel & Skärmar</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* References Section */}
      <section className="references" id="referenser">
        <div className="references-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Referenser & Projekt
          </motion.h2>
          <motion.p
            className="references-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Se exempel på våra slutförda projekt
          </motion.p>
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
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className="reference-image" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
              <div className="reference-content">
                <h3>Nybyggnation Villa</h3>
                <p>Komplett nybyggnation av modern villa med hög energieffektivitet och genomtänkt design.</p>
                <div className="reference-tags">
                  <span>Nybyggnation</span>
                  <span>Villa</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="reference-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className="reference-image" style={{ backgroundImage: "url('/images/gallery-header.jpg')" }}></div>
              <div className="reference-content">
                <h3>Takbyte & Renovering</h3>
                <p>Fullständigt takbyte med nya isolering och moderna takfönster för optimalt ljusinsläpp.</p>
                <div className="reference-tags">
                  <span>Tak</span>
                  <span>Renovering</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="reference-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className="reference-image" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
              <div className="reference-content">
                <h3>Totalrenovering</h3>
                <p>Omfattande renovering av äldre fastighet med fokus på modernisering och energibesparingar.</p>
                <div className="reference-tags">
                  <span>Renovering</span>
                  <span>Energi</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="om-oss">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Om Ochlik Bygg</h2>
          <p><strong>Grundat 2009</strong> av Tomasz Ochlik, har vi vuxit från ett litet familjeföretag till en etablerad aktör inom byggbranschen i Markaryd och omnejd.</p>
          <p>Trots vår tillväxt har vi bevarat vår familjekaraktär och personliga touch. Vi tar stolthet i att många av våra kunder återkommer, vilket visar på vår höga kundnöjdhet och kvalitet.</p>
          <p>Med <strong>goda kontakter inom branschen</strong> kan vi erbjuda kompletta lösningar från projektering till färdigställande, oavsett om det gäller nybyggnation, renovering eller underhåll.</p>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="kontakt">
        <div className="contact-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Kontakta Oss
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="paragraph"
          >
            Vi finns här för att hjälpa er förverkliga era byggprojekt. Tveka inte att höra av er!
          </motion.p>
          <motion.div
            className="contact-info"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="contact-item" variants={fadeInUp}>
              <h3>Telefon</h3>
              <p><FaPhone /> <a href="tel:0737233536">073-723 35 36</a></p>
              <p><FaPhone /> <a href="tel:0730940503">073-094 05 03</a></p>
            </motion.div>
            <motion.div className="contact-item" variants={fadeInUp}>
              <h3>Email</h3>
              <p><FaEnvelope /> <a href="mailto:info@ochlikbygg.se">info@ochlikbygg.se</a></p>
              <p><FaEnvelope /> <a href="mailto:adam@ochlikbygg.se">adam@ochlikbygg.se</a></p>
            </motion.div>
            <motion.div className="contact-item" variants={fadeInUp}>
              <h3>Besöksadress</h3>
              <p><FaMapMarkerAlt /> Hässleholmsvägen 22</p>
              <p>285 33 Markaryd</p>
            </motion.div>
            <motion.div className="contact-item" variants={fadeInUp}>
              <h3>Sociala Medier</h3>
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

export default ModernPrototype
