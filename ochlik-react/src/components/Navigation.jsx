import { motion } from 'framer-motion'

const Navigation = () => {
  return (
    <motion.nav
      className="nav"
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
  )
}

export default Navigation
