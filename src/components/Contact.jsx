import { motion } from "framer-motion";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
} from "@mui/material";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "TELEFON",
      lines: [
        { text: "073-723 35 36", link: "tel:0737233536" },
        { text: "073-094 05 03", link: "tel:0730940503" },
      ],
    },
    {
      icon: <FaEnvelope />,
      title: "EMAIL",
      lines: [
        { text: "info@ochlikbygg.se", link: "mailto:info@ochlikbygg.se" },
        { text: "adam@ochlikbygg.se", link: "mailto:adam@ochlikbygg.se" },
      ],
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "BESÖK OSS",
      lines: [{ text: "Hässleholmsvägen 22" }, { text: "285 33 Markaryd" }],
    },
    {
      icon: (
        <>
          <FaFacebook /> <FaInstagram />
        </>
      ),
      title: "SOCIALA MEDIER",
      lines: [
        { text: "Facebook: OTB Bygg AB" },
        { text: "Instagram: @ochlikbygg" },
      ],
    },
  ];

  return (
    <Box id="kontakt" sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
        <SectionTitle title="KONTAKTA OSS" />
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          sx={{ justifyContent: "center",}}
        >
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={12} md={12} key={index}>
              <Card
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                  borderTop: "4px solid",
                  borderColor: "accent.main",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      fontSize: "1.3rem",
                    }}
                  >
                    {info.icon} {info.title}
                  </Typography>
                  {info.lines.map((line, lineIndex) => (
                    <Typography key={lineIndex} variant="body1" sx={{ my: 1 }}>
                      {line.link ? (
                        <Link
                          href={line.link}
                          sx={{
                            color: "primary.main",
                            textDecoration: "none",
                            fontWeight: 600,
                            "&:hover": {
                              color: "text.primary",
                            },
                          }}
                        >
                          {line.text}
                        </Link>
                      ) : (
                        line.text
                      )}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
