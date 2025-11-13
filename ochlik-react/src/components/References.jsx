import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Modal,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon, ChevronLeft, ChevronRight } from "@mui/icons-material";
import SectionTitle from "./SectionTitle";

const References = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projects = [
    {
      title: "TAKBYTE",
      description:
        "Professionella takbyten med högkvalitativa material för ett väderskyddat och energieffektivt hem.",
      detailedDescription:
        "Ett nytt tak är en viktig investering som skyddar ditt hem i många år framöver. Vi erbjuder kompletta takbyten med moderna material och professionell installation. För dig som kund innebär detta:\n\n• Förbättrat skydd mot väder och vind\n• Minskade värmeförluster och lägre energikostnader\n• Ökad fastighetsvärde\n• Möjlighet till takfönster för mer naturligt ljus\n• Lång hållbarhet med garanti på både material och arbete\n\nVi hanterar allt från traditionella takpannor till moderna plåttak och säkerställer att ditt nya tak uppfyller alla byggnadskrav.",
      image: "/images/roofing/IMG_0555.jpeg",
      galleryImages: [
        "/images/roofing/IMG_0555.jpeg",
        "/images/roofing/IMG_1031.jpeg",
        "/images/roofing/IMG_2956.jpeg",
        "/images/roofing/IMG_5147.jpeg",
        "/images/roofing/IMG_7593.jpeg",
        "/images/roofing/IMG_4822.jpeg",
      ],
      tags: ["TAK", "ENERGI"],
    },
    {
      title: "PUTS OCH MURNING",
      description:
        "Expertis inom puts- och murningsarbeten för både nybyggnation och renovering av fasader.",
      detailedDescription:
        "Professionell puts och murning är grunden för en vacker och hållbar fasad. Våra tjänster inom puts och murning ger dig:\n\n• Slät och jämn fasad som tål väder och vind\n• Förbättrat skydd mot fukt och kyla\n• Estetiskt tilltalande resultat som höjer husets värde\n• Reparation av sprickor och skador\n• Både traditionell puts och moderna fasadsystem\n\nVi arbetar med allt från hela fasader till mindre reparationer och säkerställer att arbetet håller högsta kvalitet. Oavsett om det gäller ett äldre hus som behöver uppfräschas eller nybyggnation, så har vi erfarenheten och kunskapen.",
      image: "/images/plastering_masonry/IMG_0331.jpeg",
      galleryImages: [
        "/images/plastering_masonry/IMG_0331.jpeg",
        "/images/plastering_masonry/IMG_0525.jpeg",
        "/images/plastering_masonry/IMG_0829.jpeg",
        "/images/plastering_masonry/IMG_1073.jpeg",
        "/images/plastering_masonry/IMG_7393.jpeg",
        "/images/plastering_masonry/IMG_0760.jpeg",
      ],
      tags: ["PUTS", "MURNING", "FASAD"],
    },
    {
      title: "FASAD OCH FÖNSTERBYTE",
      description:
        "Modernisera ditt hem med nya fönster och fräsch fasad för bättre energiprestanda och utseende.",
      detailedDescription:
        "Nya fönster och en uppdaterad fasad förvandlar ditt hem både utvändigt och invändigt. Detta innebär för dig:\n\n• Dramatiskt minskade värmeförluster - upp till 30% lägre energikostnader\n• Bättre ljudisolering från trafikbuller\n• Modernare utseende som ökar fastighetsvärdet\n• Underhållsfria material som håller i decennier\n• Förbättrat inomhusklimat med moderna ventilationslösningar\n\nVi hjälper dig välja rätt fönster och fasadlösning för just ditt hus. Från traditionella träfönster till moderna energieffektiva alternativ - vi hanterar installation och fasadarbete så att allt blir perfekt.",
      image: "/images/windows_frontage/IMG_1107.jpeg",
      galleryImages: [
        "/images/windows_frontage/IMG_1107.jpeg",
        "/images/windows_frontage/IMG_3022.jpeg",
        "/images/windows_frontage/IMG_4703.jpeg",
        "/images/windows_frontage/IMG_1164.jpeg",
        "/images/windows_frontage/IMG_4709.jpeg",
        "/images/windows_frontage/IMG_1533.jpeg",
      ],
      tags: ["FÖNSTER", "FASAD", "ENERGI"],
    },
    {
      title: "GRUNDARBETE",
      description:
        "Professionellt grundarbete som säkerställer en stabil och hållbar grund för ditt byggprojekt.",
      detailedDescription:
        "En stabil grund är avgörande för varje byggprojekt. Våra grundarbeten ger dig trygghet genom:\n\n• Professionell markberedning och dränering\n• Platta på mark, källare eller krypgrund enligt dina behov\n• Korrekt armering och betonggjutning för maximal stabilitet\n• Fuktsäkra lösningar som skyddar mot markfukt\n• Långsiktig hållbarhet och säkerhet för din byggnad\n\nVi tar hand om allt från markundersökning till färdig grund, och säkerställer att allt uppfyller byggnadskraven. Oavsett om det gäller nybyggnation, tillbyggnad eller grundförstärkning - vi har erfarenheten.",
      image: "/images/foundation_work/IMG_2201.jpeg",
      galleryImages: [
        "/images/foundation_work/IMG_2201.jpeg",
        "/images/foundation_work/IMG_2272.jpeg",
        "/images/foundation_work/IMG_5174.jpeg",
        "/images/foundation_work/IMG_5267.jpeg",
        "/images/foundation_work/IMG_2310.jpeg",
        "/images/foundation_work/IMG_5301.jpeg",
      ],
      tags: ["GRUND", "BETONG"],
    },
    {
      title: "TRALL",
      description:
        "Snygga och hållbara trallösningar för uteplats, altan och terrass som förlänger din bostadsyta utomhus.",
      detailedDescription:
        "En välbyggd trall eller altan skapar ett fantastiskt utomhusutrymme för familjen. För dig innebär det:\n\n• Ett trivsamt uterum för avkoppling och umgänge\n• Ökat bostadsvärde och förbättrad livskvalitet\n• Underhållsfria material som tål väder året runt\n• Professionell nivåsättning och dränering\n• Räcken och trappor som är både säkra och vackra\n\nVi bygger allt från små uteplatser till stora altaner och pooltrallningar. Vi hjälper dig välja rätt material - oavsett om du föredrar traditionellt trä eller moderna kompositmaterial som kräver minimalt underhåll.",
      image: "/images/trolley/IMG_0931.jpeg",
      galleryImages: [
        "/images/trolley/IMG_0931.jpeg",
        "/images/trolley/IMG_1254.jpeg",
        "/images/trolley/IMG_1786.jpeg",
        "/images/trolley/IMG_3009.jpeg",
        "/images/trolley/IMG_3555.jpeg",
        "/images/trolley/IMG_6182.jpeg",
      ],
      tags: ["TRALL", "UTEPLATS", "ALTAN"],
    },
    {
      title: "RENOVERINGAR",
      description:
        "Totalrenoveringar och ombyggnationer som moderniserar ditt hem och anpassar det efter dina behov.",
      detailedDescription:
        "En renovering kan förvandla ditt hem från grunden. Våra renoveringstjänster innebär för dig:\n\n• Modernisering av kök, badrum och andra utrymmen\n• Förbättrad planlösning som passar din livssituation\n• Uppdaterade el- och VVS-installationer enligt moderna standarder\n• Ökad energieffektivitet med nya isolerings- och ventilationslösningar\n• Högre fastighetsvärde och bättre boendekvalitet\n\nVi hanterar allt från mindre badrumsrenoveringar till totalrenoveringar av hela huset. Med vår erfarenhet guidar vi dig genom hela processen - från planering och design till färdigt resultat. Vi samordnar alla hantverkare så att projektet flyter på smidigt.",
      image: "/images/renovations/IMG_4437.jpeg",
      galleryImages: [
        "/images/renovations/IMG_4437.jpeg",
        "/images/renovations/IMG_4543.jpeg",
        "/images/renovations/IMG_4651.jpeg",
        "/images/renovations/IMG_5030.jpeg",
        "/images/renovations/IMG_5085.jpeg",
        "/images/renovations/IMG_4819.jpeg",
      ],
      tags: ["RENOVERING", "BADRUM", "KÖK"],
    },
  ];

  const handleOpen = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selectedProject && selectedProject.galleryImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject && selectedProject.galleryImages) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <>
      <Box id="referenser" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <SectionTitle title="VÅRA TJÄNSTER" />
          <Grid
            container
            spacing={3}
            component={motion.div}
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            sx={{ justifyContent: "center" }}
          >
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  component={motion.div}
                  variants={fadeInUp}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                  }}
                  onClick={() => handleOpen(project)}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    maxWidth: "400px",
                  }}
                >
                  <Box
                    sx={{
                      height: 300,
                      backgroundImage: `url('${project.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover .overlay": {
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    <Box
                      className="overlay"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(transparent, rgba(26, 26, 26, 0.9))",
                        p: 4,
                        pt: 6,
                        transform: "translateY(0)",
                        transition: "transform 0.3s",
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: "white",
                          letterSpacing: "1px",
                          fontSize: "1.5rem",
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {project.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          sx={{
                            bgcolor: "secondary.main",
                            color: "primary.main",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            letterSpacing: "1px",
                            border: "2px solid",
                            borderColor: "primary.main",
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 0, sm: 2 },
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            maxWidth: { xs: "100%", sm: 900 },
            width: "100%",
            height: { xs: "100vh", sm: "auto" },
            maxHeight: { xs: "100vh", sm: "90vh" },
            overflow: "auto",
            position: "relative",
            outline: "none",
          }}
        >
          {selectedProject && (
            <>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "sticky",
                  right: { xs: 8, sm: 8 },
                  top: 8,
                  float: "right",
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  zIndex: 1000,
                  m: 1,
                  "&:hover": {
                    bgcolor: "white",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Image Carousel at Top */}
              {selectedProject.galleryImages &&
                selectedProject.galleryImages.length > 0 && (
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 300, sm: 450 },
                      bgcolor: "#f5f5f5",
                      overflow: "hidden",
                    }}
                  >
                    {/* Swipeable Carousel Image */}
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={selectedProject.galleryImages[currentImageIndex]}
                        alt={`${selectedProject.title} projekt ${currentImageIndex + 1}`}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = Math.abs(offset.x) * velocity.x;
                          if (swipe > 500) {
                            handlePrevImage();
                          } else if (swipe < -500) {
                            handleNextImage();
                          }
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <IconButton
                      onClick={handlePrevImage}
                      sx={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(255, 255, 255, 0.9)",
                        "&:hover": {
                          bgcolor: "white",
                        },
                      }}
                    >
                      <ChevronLeft />
                    </IconButton>

                    <IconButton
                      onClick={handleNextImage}
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(255, 255, 255, 0.9)",
                        "&:hover": {
                          bgcolor: "white",
                        },
                      }}
                    >
                      <ChevronRight />
                    </IconButton>

                    {/* Image Counter */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor: "rgba(0, 0, 0, 0.7)",
                        color: "white",
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      {currentImageIndex + 1} / {selectedProject.galleryImages.length}
                    </Box>
                  </Box>
                )}
              <Box sx={{ p: 4 }}>
                <Typography variant="h3" sx={{ mb: 2, color: "text.primary" }}>
                  {selectedProject.title}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      sx={{
                        bgcolor: "secondary.main",
                        color: "primary.main",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "1px",
                        border: "2px solid",
                        borderColor: "primary.main",
                      }}
                    />
                  ))}
                </Box>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ lineHeight: 1.8, whiteSpace: "pre-line" }}
                >
                  {selectedProject.detailedDescription}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default References;
