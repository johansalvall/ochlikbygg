import { useState } from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Grid, Card, CardContent, Typography, Chip, Modal, IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import SectionTitle from './SectionTitle'

const References = () => {
  const [selectedProject, setSelectedProject] = useState(null)

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
      description: "Komplett nybyggnation av modern villa med hög energieffektivitet och genomtänkt design.",
      detailedDescription: "Detta projekt omfattade fullständig nybyggnation av en modern villa på 180 kvm boyta. Vi arbetade nära med kunden från de första skisserna till slutbesiktning. Huset byggdes med fokus på energieffektivitet och hållbarhet, med fjärrvärmeanslutning, treglasfönster och extra isolering i väggarna. Den moderna arkitekturen kombinerar funktionalitet med estetik, och stora fönsterpartier släpper in mycket naturligt ljus. Projektet slutfördes i tid och inom budget, och kunden var mycket nöjd med både process och slutresultat.",
      image: "/images/hero.jpg",
      tags: ["NYBYGGNATION", "VILLA"]
    },
    {
      title: "TAKBYTE & RENOVERING",
      description: "Fullständigt takbyte med nya isolering och moderna takfönster för optimalt ljusinsläpp.",
      detailedDescription: "Ett omfattande takrenoveringsprojekt där vi bytte hela taket på en 1960-talsvilla. Projektet inkluderade borttagning av gammalt taktäckningsmaterial, förstärkning av takkonstruktionen, installation av ny isolering enligt moderna energikrav, och läggning av högkvalitativa takpannor. Vi installerade även tre nya takfönster från Velux för bättre ljusinsläpp på övervåningen. Arbetet utfördes under sensommaren och hösten för att minimera påverkan av väder, och hela projektet slutfördes på fyra veckor.",
      image: "/images/gallery-header.jpg",
      tags: ["TAK", "RENOVERING"]
    },
    {
      title: "TOTALRENOVERING",
      description: "Omfattande renovering av äldre fastighet med fokus på modernisering och energibesparingar.",
      detailedDescription: "En totalrenovering av en 1950-talsvilla där vi moderniserade hela fastigheten från grunden. Projektet inkluderade ny el och VVS-installation, byte av alla fönster och dörrar, installation av ny kök och badrum, samt renovering av alla ytor. Vi förbättrade också husets energieffektivitet genom att installera bergvärme, ny ventilation med värmeåtervinning, och extra isolering i vindsbjälklaget. Renoveringen förvandlade ett slitet hus till ett modernt och energieffektivt hem som kommer att hålla i många år framöver.",
      image: "/images/hero.jpg",
      tags: ["RENOVERING", "ENERGI"]
    },
    {
      title: "TILLBYGGNAD FAMILJEVILLA",
      description: "Professionell tillbyggnad som utökar bostadsytan med 45 kvm och skapar nya möjligheter.",
      detailedDescription: "En tillbyggnad på 45 kvm till en befintlig villa för en växande familj. Den nya delen innehåller två sovrum, ett extra badrum och en tvättstuga. Vi säkerställde att tillbyggnaden smälte perfekt samman med den befintliga arkitekturen genom att använda samma fasadmaterial och takvinkel. Grunden anlades med hänsyn till markförhållandena, och vi koordinerade arbetet med elektriker och VVS-montörer för att säkerställa att alla installationer blev professionellt utförda. Tillbyggnaden färdigställdes på tolv veckor och har gett familjen den extra plats de behövde.",
      image: "/images/gallery-header.jpg",
      tags: ["TILLBYGGNAD", "VILLA"]
    },
    {
      title: "KOMMERSIELL RENOVERING",
      description: "Omfattande renovering av kontorslokaler med modern design och funktionella lösningar.",
      detailedDescription: "Ett projekt för renovering av 300 kvm kontorslokaler i centrala Markaryd. Vi skapade en modern och inspirerande arbetsplats med öppen planlösning, separata mötesrum och relaxområde. Renoveringen inkluderade nya innerväggar, installation av ljuddämpande åtgärder, ny belysning med LED-armaturer, och modernisering av el-systemet. Vi arbetade på kvällar och helger för att minimera störningar för den löpande verksamheten. Projektet resulterade i en fräsch och funktionell kontorsmiljö som förbättrade arbetstrivseln markant.",
      image: "/images/hero.jpg",
      tags: ["RENOVERING", "KOMMERSIELLT"]
    },
    {
      title: "KÖK & BADRUMSRENOVERING",
      description: "Totalrenovering av kök och badrum med högkvalitativa material och modern design.",
      detailedDescription: "Ett kombinerat kök- och badrumsprojekt där vi totalrenoverade båda utrymmena i en villa från 1970-talet. I köket installerade vi nya Marbodal-kök med miljövänliga luckor, kompositbänkskiva, och moderna vitvaror. Vi öppnade upp planlösningen genom att ta bort en vägg, vilket skapade ett luftigare och ljusare kök. Badrummet fick helt ny kakling, golvvärme, duschkabin från Svedbergs, och effektiv badrumsmöbel med gott om förvaring. Båda renoveringarna slutfördes på sex veckor med minimala störningar för familjen.",
      image: "/images/gallery-header.jpg",
      tags: ["RENOVERING", "KÖK", "BADRUM"]
    }
  ]

  const handleOpen = (project) => {
    setSelectedProject(project)
  }

  const handleClose = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <Box id="referenser" sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <SectionTitle title="REFERENSER & PROJEKT" />
          <Grid
            container
            spacing={3}
            component={motion.div}
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            sx={{ justifyContent: 'center' }}
          >
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  component={motion.div}
                  variants={fadeInUp}
                  whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}
                  onClick={() => handleOpen(project)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    maxWidth: '350px',
                    mx: 'auto',
                  }}
                >
                  <Box
                    sx={{
                      height: 300,
                      backgroundImage: `url('${project.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover .overlay': {
                        transform: 'translateY(0)',
                      }
                    }}
                  >
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(26, 26, 26, 0.9))',
                        p: 4,
                        pt: 6,
                        transform: 'translateY(60%)',
                        transition: 'transform 0.3s',
                      }}
                    >
                      <Typography variant="h4" sx={{ color: 'white', letterSpacing: '1px', fontSize: '1.5rem' }}>
                        {project.title}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          sx={{
                            bgcolor: 'secondary.main',
                            color: 'primary.main',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            letterSpacing: '1px',
                            border: '2px solid',
                            borderColor: 'primary.main',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Modal */}
      <Modal
        open={selectedProject !== null}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            maxWidth: 800,
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            outline: 'none',
          }}
        >
          {selectedProject && (
            <>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  zIndex: 1,
                  '&:hover': {
                    bgcolor: 'white',
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{
                  height: 400,
                  backgroundImage: `url('${selectedProject.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Box sx={{ p: 4 }}>
                <Typography variant="h3" sx={{ mb: 2, color: 'text.primary' }}>
                  {selectedProject.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        letterSpacing: '1px',
                        border: '2px solid',
                        borderColor: 'primary.main',
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.8 }}>
                  {selectedProject.detailedDescription}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  )
}

export default References
