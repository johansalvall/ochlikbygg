import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const WhyUs = () => {
  const features = [
    {
      title: "Erfarna Hantverkare",
      description: "Alla våra medarbetare är certifierade och erfarna inom sina respektive områden."
    },
    {
      title: "Kompletta Lösningar",
      description: "Goda kontakter inom el, VVS och måleri ger oss möjlighet att hantera hela projekt."
    },
    {
      title: "Återkommande Kunder",
      description: "Vår höga andel återkommande kunder visar på kvaliteten i vårt arbete."
    },
    {
      title: "Lokalt Förankrade",
      description: "Vi känner området och har byggt upp ett starkt förtroende i regionen."
    }
  ]

  return (
    <section className="why-us" id="om-oss">
      <div className="why-us-container">
        <SectionTitle title="VARFÖR VÄLJA OSS?" white={true} />
        <div className="why-us-grid">
          <motion.div
            className="why-us-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Vår Historia</h3>
            <p>
              Grundat 2009 av Tomasz Ochlik har Ochlik Bygg AB utvecklats till en ledande byggfirma i Markaryd.
              Trots vår tillväxt har vi behållit vår familjekaraktär och personliga service som gör oss unika.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              Med över 15 års erfarenhet och hundratals nöjda kunder fortsätter vi att leverera byggprojekt av högsta kvalitet.
              Våra värderingar - <strong>Trygghet, Ansvar och Kunskap</strong> - genomsyrar allt vi gör.
            </p>
          </motion.div>
          <motion.div
            className="why-us-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ul className="feature-list">
              {features.map((feature, index) => (
                <motion.li key={index} whileHover={{ x: 10 }}>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
