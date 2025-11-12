import { motion } from 'framer-motion'

const Hero = () => {
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

  return (
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
  )
}

export default Hero
