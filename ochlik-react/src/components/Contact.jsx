import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "TELEFON",
      lines: [
        { text: "073-723 35 36", link: "tel:0737233536" },
        { text: "073-094 05 03", link: "tel:0730940503" }
      ]
    },
    {
      icon: <FaEnvelope />,
      title: "EMAIL",
      lines: [
        { text: "info@ochlikbygg.se", link: "mailto:info@ochlikbygg.se" },
        { text: "adam@ochlikbygg.se", link: "mailto:adam@ochlikbygg.se" }
      ]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "BESÖK OSS",
      lines: [
        { text: "Hässleholmsvägen 22" },
        { text: "285 33 Markaryd" }
      ]
    },
    {
      icon: <><FaFacebook /> <FaInstagram /></>,
      title: "SOCIALA MEDIER",
      lines: [
        { text: "Facebook: OTB Bygg AB" },
        { text: "Instagram: @ochlikbygg" }
      ]
    }
  ]

  return (
    <section className="contact" id="kontakt">
      <div className="contact-container">
        <SectionTitle title="KONTAKTA OSS" />
        <motion.div
          className="contact-grid"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => (
            <motion.div key={index} className="contact-card" variants={fadeInUp}>
              <h3>{info.icon} {info.title}</h3>
              {info.lines.map((line, lineIndex) => (
                <p key={lineIndex}>
                  {line.link ? (
                    <a href={line.link}>{line.text}</a>
                  ) : (
                    line.text
                  )}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
