import { motion } from 'framer-motion'

const SectionTitle = ({ title, white = false }) => {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className={white ? 'white' : ''}>{title}</h2>
      <div className="underline"></div>
    </motion.div>
  )
}

export default SectionTitle
