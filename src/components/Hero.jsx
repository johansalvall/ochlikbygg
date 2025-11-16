import { motion } from "framer-motion";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      id="hem"
      sx={{
        color: "white",
        minHeight: { xs: "100vh", md: "100vh" },
        py: { xs: 8, md: 12 },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Static Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/images/roofing/IMG_1094.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              sx={{ textAlign: "center" }}
            >
              <Typography
                variant="h1"
                component={motion.h1}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                sx={{
                  mb: 3,
                  textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                }}
              >
                Din Byggpartner i Markaryd
              </Typography>
              <Typography
                variant="h5"
                component={motion.p}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                sx={{
                  mb: 4,
                  color: "#fcfcfcff",
                  textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
                  fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" },
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
              >
                Välkommen till Ochlik Bygg! Vi erbjuder professionella
                byggnadstjänster sedan 2009 och levererar kvalitet, trygghet och
                expertis i varje projekt.
              </Typography>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  component={motion.a}
                  href="#kontakt"
                  variant="contained"
                  position="center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{ 
                    borderRadius: 8,
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    py: { xs: 0.75, sm: 1 },
                    px: { xs: 2, sm: 3 },
                  }}
                >
                  BEGÄR OFFERT
                </Button>
                <Button
                  component={motion.a}
                  href="#kontakt"
                  variant="outlined"
                  whileHover={{ scale: 1.05 }}
                  position="center"
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    color: "white",
                    borderColor: "white",
                    borderWidth: "3px",
                    borderRadius: 8,
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    py: { xs: 0.75, sm: 1 },
                    px: { xs: 2, sm: 3 },
                    "&:hover": {
                      borderWidth: "3px",
                      bgcolor: "white",
                      color: "secondary.main",
                    },
                  }}
                >
                  KONTAKTA OSS
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
