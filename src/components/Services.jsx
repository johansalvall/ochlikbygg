import { motion } from "framer-motion";
import { Box, Container, Typography, Grid } from "@mui/material";
import {
  FaHardHat,
  FaTools,
  FaHome,
  FaShieldAlt,
  FaWindowMaximize,
  FaCog,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { fadeInUp, stagger } from "../animations/variants";

const Services = () => {
  const services = [
    {
      icon: <FaHardHat />,
      title: "NYBYGGNATION",
      desc: "Kompletta nybyggnadsprojekt från grunden. Vi hanterar allt från projektering till färdigställande med högsta kvalitet.",
    },
    {
      icon: <FaTools />,
      title: "RENOVERING",
      desc: "Totalrenovering av kök, badrum och hela fastigheter. Vi förvandlar ditt hem till drömrummet.",
    },
    {
      icon: <FaHome />,
      title: "TILLBYGGNAD",
      desc: "Utöka ditt hem med professionella tillbyggnader som smälter in och ökar värdet på din fastighet.",
    },
    {
      icon: <FaShieldAlt />,
      title: "TAKARBETEN",
      desc: "Specialister på alla typer av takarbeten. Från reparationer till kompletta takrenovationer.",
    },
    {
      icon: <FaWindowMaximize />,
      title: "FÖNSTERINSTALLATION",
      desc: "Importerar och installerar högkvalitativa fönster anpassade efter dina behov och önskemål.",
    },
    {
      icon: <FaCog />,
      title: "SPECIALARBETEN",
      desc: "Betongarbeten, murverk, fasadarbeten och mycket mer. Kompletta lösningar för alla byggbehov.",
    },
  ];

  return (
    <Box id="tjanster" sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
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
          {services.map((service, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
              <Box
                component={motion.div}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                sx={{
                  bgcolor: "white",
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s",
                  borderBottom: "4px solid transparent",
                  maxWidth: "400px",
                  mx: "auto",
                  "&:hover": {
                    borderBottomColor: "#f5c842",
                  },
                  "&:hover .service-icon": {
                    color: "#f5c842",
                  },
                }}
              >
                <Box
                  className="service-icon"
                  sx={{
                    fontSize: "3.5rem",
                    mb: 2,
                    color: "primary.main",
                    transition: "color 0.3s",
                  }}
                >
                  {service.icon}
                </Box>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
