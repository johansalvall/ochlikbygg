import { motion } from 'framer-motion'
import { FaHardHat, FaTools, FaHome, FaShieldAlt, FaWindowMaximize, FaCog } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const Services = () => {
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

  const services = [
    { icon: <FaHardHat />, title: "NYBYGGNATION", desc: "Kompletta nybyggnadsprojekt från grunden. Vi hanterar allt från projektering till färdigställande med högsta kvalitet." },
    { icon: <FaTools />, title: "RENOVERING", desc: "Totalrenovering av kök, badrum och hela fastigheter. Vi förvandlar ditt hem till drömrummet." },
    { icon: <FaHome />, title: "TILLBYGGNAD", desc: "Utöka ditt hem med professionella tillbyggnader som smälter in och ökar värdet på din fastighet." },
    { icon: <FaShieldAlt />, title: "TAKARBETEN", desc: "Specialister på alla typer av takarbeten. Från reparationer till kompletta takrenovationer." },
    { icon: <FaWindowMaximize />, title: "FÖNSTERINSTALLATION", desc: "Importerar och installerar högkvalitativa fönster anpassade efter dina behov och önskemål." },
    { icon: <FaCog />, title: "SPECIALARBETEN", desc: "Betongarbeten, murverk, fasadarbeten och mycket mer. Kompletta lösningar för alla byggbehov." }
  ]

  return (
    <section className="services" id="tjanster">
      <div className="services-container">
        <SectionTitle title="VÅRA TJÄNSTER" />
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
  )
}

export default Services
