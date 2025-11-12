import { motion } from 'framer-motion'

const CTA = () => {
  return (
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
  )
}

export default CTA
