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
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {/* About Us Column */}
          <Grid item xs={12} md={4}>
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
                  maxWidth: "700px",
                }}
              >
                Sedan 2009 har Ochlik Bygg AB levererat högkvalitativa
                byggprojekt i Markaryd och omnejd. Vi erbjuder allt inom bygg -
                från första ritning till slutlig överlämning. Hos oss står
                kunden alltid i centrum, och vi arbetar med hög kvalitet och
                noggrannhet i varje projekt.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#999",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  mt: 2,
                }}
              >
                Org.nr: 556990-54
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={12} sm={6} md={2}>
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
                SNABBLÄNKAR
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Link
                  href="#hem"
                  sx={{
                    color: "#aaa",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": { color: "accent.main" },
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
                    "&:hover": { color: "accent.main" },
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
                    "&:hover": { color: "accent.main" },
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
                    "&:hover": { color: "accent.main" },
                  }}
                >
                  Kontakt
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Service Areas Column */}
          <Grid item xs={12} sm={6} md={2}>
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
                VÅRA OMRÅDEN
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#aaa", fontSize: "0.9rem" }}
                >
                  • Markaryd
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#aaa", fontSize: "0.9rem" }}
                >
                  • Hässleholm
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#aaa", fontSize: "0.9rem" }}
                >
                  • Ljungby
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#aaa", fontSize: "0.9rem" }}
                >
                  • Älmhult
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#aaa", fontSize: "0.9rem" }}
                >
                  • Osby
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Column */}
          <Grid item xs={12} md={4}>
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
                KONTAKT
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <FaMapMarkerAlt
                    style={{
                      color: "#f7d66b",
                      marginTop: "4px",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "text.light", fontSize: "0.9rem" }}
                  >
                    Hässleholmsvägen 22
                    <br />
                    285 33 Markaryd
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1,
                  }}
                >
                  <FaPhone
                    style={{
                      color: "#f7d66b",
                      marginTop: "4px",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "text.light", }}>Adam Ochlik: 
                      <Link
                        href="tel:0737233536"
                        sx={{
                          color: "text.light",
                          textDecoration: "none",
                          paddingLeft: "5px",
                          "&:hover": { color: "accent.light" },
                        }}
                      >
                          073-723 35 36
                      </Link>
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "text.light", }}>Tomasz Ochlik: 
                      <Link
                        href="tel:0730940503"
                        sx={{
                          color: "text.light",
                          textDecoration: "none",
                          paddingLeft: "5px",
                          "&:hover": { color: "accent.light" },
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
                      color: "#f7d66b",
                      marginTop: "4px",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ fontSize: "0.9rem", color: "text.light" }}>
                      <Link
                        href="mailto:info@ochlikbygg.se"
                        sx={{
                          color: "text.light",
                          textDecoration: "none",
                          "&:hover": { color: "accent.light" },
                        }}
                      >
                        info@ochlikbygg.se
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Social Media in Contact Column */}
              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#aaa",
                    mb: 1.5,
                    fontSize: "0.9rem",
                  }}
                >
                  Följ våra projekt:
                </Typography>
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <IconButton
                    component="a"
                    href="https://www.facebook.com/OTBByggAB"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    sx={{
                      bgcolor: "#2d2d2d",
                      color: "#aaa",
                      "&:hover": {
                        bgcolor: "accent.light",
                        color: "#1a1a1a",
                      },
                      width: 40,
                      height: 40,
                    }}
                  >
                    <FaFacebook />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.instagram.com/ochlikbygg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    sx={{
                      bgcolor: "#2d2d2d",
                      color: "#aaa",
                      "&:hover": {
                        bgcolor: "accent.light",
                        color: "#1a1a1a",
                      },
                      width: 40,
                      height: 40,
                    }}
                  >
                    <FaInstagram />
                  </IconButton>
                </Box>
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
