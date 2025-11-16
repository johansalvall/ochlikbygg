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
import {
  Close as CloseIcon,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import SectionTitle from "./SectionTitle";
import { fadeInUp, stagger } from "../animations/variants";
import { useImageCarousel } from "../hooks/useImageCarousel";

const References = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
        "/images/roofing/66B5E8CD-B414-452B-A7B1-73C9FCDF046C.jpg",
        "/images/roofing/AE4076CD-B701-47E3-ADB8-24AB795469BC.jpg",
        "/images/roofing/IMG_1038.jpeg",
        "/images/roofing/IMG_1094.jpeg",
        "/images/roofing/IMG_1099.jpeg",
        "/images/roofing/IMG_2956.jpeg",
        "/images/roofing/IMG_7593.jpeg",
        "/images/roofing/IMG_2973.jpeg",
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
      image: "/images/windows_frontage/IMG_1164-min.jpeg",
      galleryImages: [
        "/images/windows_frontage/IMG_1164-min.jpeg",
        "/images/windows_frontage/IMG_1107-min.jpeg",
        "/images/windows_frontage/IMG_4703-min.jpeg",
        "/images/windows_frontage/IMG_4709-min.jpeg",
        "/images/windows_frontage/IMG_4988-min.jpeg",
        "/images/windows_frontage/IMG_1533-min.jpeg",
        "/images/windows_frontage/IMG_3024-min.jpeg",
      ],
      tags: ["FASAD", "FÖNSTER", "ENERGI"],
    },
    {
      title: "GRUNDARBETE",
      description:
        "Professionellt grundarbete som säkerställer en stabil och hållbar grund för ditt byggprojekt.",
      detailedDescription:
        "En stabil grund är avgörande för varje byggprojekt. Våra grundarbeten ger dig trygghet genom:\n\n• Professionell markberedning och dränering\n• Platta på mark, källare eller krypgrund enligt dina behov\n• Korrekt armering och betonggjutning för maximal stabilitet\n• Fuktsäkra lösningar som skyddar mot markfukt\n• Långsiktig hållbarhet och säkerhet för din byggnad\n\nVi tar hand om allt från markundersökning till färdig grund, och säkerställer att allt uppfyller byggnadskraven. Oavsett om det gäller nybyggnation, tillbyggnad eller grundförstärkning - vi har erfarenheten.",
      image: "/images/foundation_work/IMG_2201-min.jpg",
      galleryImages: [
        "/images/foundation_work/IMG_2201-min.jpg",
        "/images/foundation_work/IMG_2310-min.jpg",
        "/images/foundation_work/IMG_2272-min.jpg",
        "/images/foundation_work/IMG_2332-min.jpg",
        "/images/foundation_work/IMG_5267-min.jpg",
        "/images/foundation_work/IMG_5301-min.jpg",
        "/images/foundation_work/IMG_5188-min.jpg",
      ],
      tags: ["GRUND", "BETONG"],
    },
    {
      title: "TRALL",
      description:
        "Snygga och hållbara trallösningar för uteplats, altan och terrass som förlänger din bostadsyta utomhus.",
      detailedDescription:
        "En välbyggd trall eller altan skapar ett fantastiskt utomhusutrymme för familjen. För dig innebär det:\n\n• Ett trivsamt uterum för avkoppling och umgänge\n• Ökat bostadsvärde och förbättrad livskvalitet\n• Underhållsfria material som tål väder året runt\n• Professionell nivåsättning och dränering\n• Räcken och trappor som är både säkra och vackra\n\nVi bygger allt från små uteplatser till stora altaner och pooltrallningar. Vi hjälper dig välja rätt material - oavsett om du föredrar traditionellt trä eller moderna kompositmaterial som kräver minimalt underhåll.",
      image: "/images/trolley/IMG_1788-min.jpeg",
      galleryImages: [
        "/images/trolley/IMG_1788-min.jpeg",
        "/images/trolley/IMG_1254-min.jpeg",
        "/images/trolley/IMG_1265-min.jpeg",
        "/images/trolley/IMG_1268-min.jpeg",
        "/images/trolley/IMG_3555-min.jpeg",
        "/images/trolley/IMG_3557-min.jpeg",
        "/images/trolley/IMG_3558-min.jpeg",
      ],
      tags: ["TRALL", "UTEPLATS", "ALTAN"],
    },
    {
      title: "RENOVERINGAR",
      description:
        "Totalrenoveringar och ombyggnationer som moderniserar ditt hem och anpassar det efter dina behov.",
      detailedDescription:
        "En renovering kan förvandla ditt hem från grunden. Våra renoveringstjänster innebär för dig:\n\n• Modernisering av kök, badrum och andra utrymmen\n• Förbättrad planlösning som passar din livssituation\n• Uppdaterade el- och VVS-installationer enligt moderna standarder\n• Ökad energieffektivitet med nya isolerings- och ventilationslösningar\n• Högre fastighetsvärde och bättre boendekvalitet\n\nVi hanterar allt från mindre badrumsrenoveringar till totalrenoveringar av hela huset. Med vår erfarenhet guidar vi dig genom hela processen - från planering och design till färdigt resultat. Vi samordnar alla hantverkare så att projektet flyter på smidigt.",
      image: "/images/renovations/IMG_4639.jpeg",
      galleryImages: [
        "/images/renovations/IMG_4639.jpeg",
        "/images/renovations/IMG_4437.jpeg",
        "/images/renovations/IMG_4543.jpeg",
        "/images/renovations/IMG_4667.jpeg",
        "/images/renovations/IMG_5030.jpeg",
        "/images/renovations/IMG_5085.jpeg",
        "/images/renovations/IMG_6074.jpeg",
      ],
      tags: ["RENOVERING", "BADRUM", "KÖK"],
    },
  ];

  // Get the current gallery length
  const currentGalleryLength = selectedProject?.galleryImages?.length || 0;

  // Use custom carousel hook
  const {
    currentIndex: currentImageIndex,
    handlePrev: handlePrevImage,
    handleNext: handleNextImage,
    goToIndex: setCurrentImageIndex,
  } = useImageCarousel(currentGalleryLength);

  const handleOpen = (project) => {
    // Always reset to first image when opening
    setCurrentImageIndex(0);
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <Box id="referenser" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 3, md: 4, lg: 6, xl: 8 } }}>
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
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ px: { xs: 0.625, sm: 0 } }}>
                <Card
                  component={motion.div}
                  variants={fadeInUp}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    maxWidth: "400px",
                    boxShadow: { xs: "0 2px 8px rgba(0,0,0,0.1)", sm: "16px 16px 16px rgba(61, 90, 128, 0.15)" },
                    borderRadius: 3,
                    overflow: "hidden",
                    "&:hover": {
                      transform: { xs: "none", sm: "translateY(-10px)" },
                      boxShadow: { xs: "0 2px 8px rgba(0,0,0,0.1)", sm: "0 30px 60px rgba(0,0,0,0.2)" },
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Image box - click to open modal */}
                  <Box
                    onClick={() => handleOpen(project)}
                    sx={{
                      height: 300,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Static image with overlay */}
                    <Box
                        sx={{
                          height: "100%",
                          backgroundImage: `url('${project.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          position: "relative",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.45)",
                            transition: "background-color 0.3s",
                          },
                          "&:hover::before": {
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                          },
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
                  </Box>
                  <CardContent
                    onClick={() => handleOpen(project)}
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      p: { xs: 1, sm: 2 },
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ mb: 2, flexGrow: 1 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {project.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          sx={{
                            bgcolor: "primary.main",
                            color: "#ffffffff",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            letterSpacing: "1px",
                            border: "2px solid",
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

      {/* Modal (All Screen Sizes) */}
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
                  position: "fixed",
                  right: { xs: 16, sm: 8 },
                  top: { xs: 16, sm: 8 },
                  bgcolor: "rgba(255, 255, 255, 0.95)",
                  zIndex: 1300,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
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
                        alt={`${selectedProject.title} projekt ${
                          currentImageIndex + 1
                        }`}
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
                      {currentImageIndex + 1} /{" "}
                      {selectedProject.galleryImages.length}
                    </Box>
                  </Box>
                )}

              {/* Thumbnail Gallery */}
              {selectedProject.galleryImages &&
                selectedProject.galleryImages.length > 1 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1.5,
                      p: 2,
                      bgcolor: "#f5f5f5",
                      overflowX: "auto",
                      "&::-webkit-scrollbar": {
                        height: 8,
                      },
                      "&::-webkit-scrollbar-thumb": {
                        bgcolor: "primary.main",
                        borderRadius: 4,
                      },
                    }}
                  >
                    {selectedProject.galleryImages.map((image, index) => (
                      <Box
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        sx={{
                          width: 60,
                          height: 60,
                          flexShrink: 0,
                          backgroundImage: `url('${image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          cursor: "pointer",
                          border: "3px solid",
                          borderColor:
                            currentImageIndex === index
                              ? "accent.main"
                              : "transparent",
                          opacity: currentImageIndex === index ? 1 : 0.6,
                          transition: "all 0.3s",
                          "&:hover": {
                            opacity: 1,
                            borderColor: "accent.main",
                          },
                        }}
                      />
                    ))}
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
                        bgcolor: "primary.main",
                        color: "white",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "1px",
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
