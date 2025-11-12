import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const References = () => {
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

  const projects = [
    {
      title: "NYBYGGNATION VILLA",
      description: "Komplett nybyggnation av modern villa med hög energieffektivitet och genomtänkt design. Ett helhetsuppdrag från grunden till färdigställande.",
      image: "/images/hero.jpg",
      tags: ["NYBYGGNATION", "VILLA"]
    },
    {
      title: "TAKBYTE & RENOVERING",
      description: "Fullständigt takbyte med nya isolering och moderna takfönster för optimalt ljusinsläpp. Professionellt utförande med garanterad kvalitet.",
      image: "/images/gallery-header.jpg",
      tags: ["TAK", "RENOVERING"]
    },
    {
      title: "TOTALRENOVERING",
      description: "Omfattande renovering av äldre fastighet med fokus på modernisering och energibesparingar. Från planering till slutbesiktning.",
      image: "/images/hero.jpg",
      tags: ["RENOVERING", "ENERGI"]
    }
  ]

  return (
    <section className="references" id="referenser">
      <div className="references-container">
        <SectionTitle title="REFERENSER & PROJEKT" />
        <motion.div
          className="references-grid"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="reference-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}
            >
              <div className="reference-image" style={{ backgroundImage: `url('${project.image}')` }}>
                <div className="reference-overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>
              <div className="reference-content">
                <p>{project.description}</p>
                <div className="reference-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default References
