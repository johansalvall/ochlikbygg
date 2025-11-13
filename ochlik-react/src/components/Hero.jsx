import { motion } from "framer-motion";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

const Hero = () => {
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

  const stats = [
    { number: "15+", label: "ÅRS ERFARENHET" },
    { number: "100%", label: "KUNDNÖJDHET" },
    { number: "500+", label: "PROJEKT" },
    { number: "24/7", label: "SUPPORT" },
  ];

  return (
    <Box
      id="hem"
      sx={{
        background:
          "linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(45, 45, 45, 0.85) 100%), url(/images/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: { xs: "auto", md: "90vh" },
        py: { xs: 8, md: 12 },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(45deg, transparent 0%, rgba(61, 90, 128, 0.15) 100%)",
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                component={motion.h1}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                sx={{ mb: 3 }}
              >
                DIN{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  BYGGPARTNER
                </Box>{" "}
                I MARKARYD
              </Typography>
              <Typography
                variant="h5"
                component={motion.p}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                sx={{ mb: 4, color: "#ccc" }}
              >
                Professionella byggnadstjänster sedan 2009. Vi levererar
                kvalitet, trygghet och expertis i varje projekt.
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
                }}
              >
                <Button
                  component={motion.a}
                  href="#kontakt"
                  variant="contained"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BEGÄR OFFERT
                </Button>
                <Button
                  component={motion.a}
                  href="#referenser"
                  variant="outlined"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    color: "white",
                    borderColor: "white",
                    borderWidth: "3px",
                    "&:hover": {
                      borderWidth: "3px",
                      bgcolor: "white",
                      color: "secondary.main",
                    },
                  }}
                >
                  VÅRA TJÄNSTER
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid
              container
              spacing={2}
              component={motion.div}
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {stats.map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <Box
                    component={motion.div}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      p: 3,
                      borderLeft: "4px solid",
                      borderColor: "primary.main",
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{ color: "#f5c842", fontSize: "3rem", lineHeight: 1 }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mt: 1, color: "#ccc", fontSize: "1.1rem" }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
