import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1a1a1a",
        color: "white",
        pt: 8,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {/* About Us Column - Takes remainder space */}
          <Grid item xs={12} md={3}>
            <Box sx={{ minHeight: "200px" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  mb: 2,
                  fontSize: "1rem",
                  fontWeight: 700,
                }}
              >
                OM OSS
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#aaa",
                  lineHeight: 1.8,
                  mb: 2,
                  maxWidth: "600px",
                }}
              >
                Sedan 2009 har vi levererat högkvalitativa byggprojekt i
                Markaryd och omnejd. Vi är specialister på nybyggnation,
                renovering och tillbyggnader. Vi erbjuder professionella
                tjänster inom nybyggnation, renovering, tillbyggnader och
                takarbeten. Med erfarenhet och kunskap säkerställer vi högsta
                kvalitet i varje projekt.
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links Column - Equal width */}
          <Grid item xs={12} md={3}>
            <Box sx={{ minHeight: "200px" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  mb: 2,
                  fontSize: "1rem",
                  fontWeight: 700,
                }}
              >
                SNABBLÄNKAR
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Link
                  href="#hem"
                  sx={{
                    color: "#aaa",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ff6b35" },
                  }}
                >
                  Hem
                </Link>
                <Link
                  href="#tjanster"
                  sx={{
                    color: "#aaa",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ff6b35" },
                  }}
                >
                  Tjänster
                </Link>
                <Link
                  href="#referenser"
                  sx={{
                    color: "#aaa",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ff6b35" },
                  }}
                >
                  Referenser
                </Link>
                <Link
                  href="#kontakt"
                  sx={{
                    color: "#aaa",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ff6b35" },
                  }}
                >
                  Kontakt
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Contact Column - Equal width */}
          <Grid item xs={12} md={3}>
            <Box sx={{ minHeight: "200px" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  mb: 2,
                  fontSize: "1rem",
                  fontWeight: 700,
                }}
              >
                KONTAKT
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <FaMapMarkerAlt
                    style={{
                      color: "#ff6b35",
                      marginTop: "4px",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "#aaa", fontSize: "0.9rem" }}
                  >
                    Hässleholmsvägen 22
                    <br />
                    285 33 Markaryd
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <FaPhone
                    style={{
                      color: "#ff6b35",
                      marginTop: "4px",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                      <Link
                        href="tel:0737233536"
                        sx={{
                          color: "#aaa",
                          textDecoration: "none",
                          "&:hover": { color: "#ff6b35" },
                        }}
                      >
                        073-723 35 36
                      </Link>
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                      <Link
                        href="tel:0730940503"
                        sx={{
                          color: "#aaa",
                          textDecoration: "none",
                          "&:hover": { color: "#ff6b35" },
                        }}
                      >
                        073-094 05 03
                      </Link>
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <FaEnvelope
                    style={{
                      color: "#ff6b35",
                      marginTop: "4px",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                      <Link
                        href="mailto:info@ochlikbygg.se"
                        sx={{
                          color: "#aaa",
                          textDecoration: "none",
                          "&:hover": { color: "#ff6b35" },
                        }}
                      >
                        info@ochlikbygg.se
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Social Media Column - Equal width */}
          <Grid item xs={12} md={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  mb: 2,
                  fontSize: "1rem",
                  fontWeight: 700,
                }}
              >
                FÖLJ OSS
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#aaa",
                  mb: 3,
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                }}
              >
                Följ oss på sociala medier för att se våra senaste projekt och
                nyheter. Vi delar regelbundet bilder och uppdateringar från våra
                byggprojekt.
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <IconButton
                  sx={{
                    bgcolor: "#2d2d2d",
                    color: "#aaa",
                    "&:hover": {
                      bgcolor: "#ff6b35",
                      color: "white",
                    },
                    width: 40,
                    height: 40,
                  }}
                >
                  <FaFacebook />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "#2d2d2d",
                    color: "#aaa",
                    "&:hover": {
                      bgcolor: "#ff6b35",
                      color: "white",
                    },
                    width: 40,
                    height: 40,
                  }}
                >
                  <FaInstagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: "1px solid #333", pt: 3, textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ color: "#888", fontSize: "0.85rem" }}
          >
            &copy; 2025 Ochlik Bygg AB. Alla rättigheter förbehållna.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
