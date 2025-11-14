import { motion } from "framer-motion";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import SectionTitle from "./SectionTitle";

const WhyUs = () => {
  const features = [
    {
      title: "Kunden i Centrum",
      description:
        "Hos oss står du som kund alltid i centrum. Vi lyssnar på dina behov och anpassar våra lösningar efter just dina önskemål.",
    },
    {
      title: "Från Ritning till Överlämning",
      description:
        "Vi hanterar allt från första skissen till färdigt projekt. En kontaktperson genom hela processen ger dig trygghet och enkelhet.",
    },
    {
      title: "Erfarna Hantverkare",
      description:
        "Skickliga snickare och byggare med årtionden av samlad erfarenhet. Alla våra medarbetare är certifierade och kunniga.",
    },
    {
      title: "Kompletta Lösningar",
      description:
        "Genom goda kontakter inom el, VVS, måleri och andra bygghantverk kan vi erbjuda totalentreprenader där allt samordnas.",
    },
    {
      title: "Hög Kvalitet och Noggrannhet",
      description:
        "Vi kompromissar aldrig med kvaliteten. Varje detalj utförs med precision och omsorg för att uppnå bästa resultat.",
    },
    {
      title: "Lokalt Förankrade",
      description:
        "Sedan 2009 i Markaryd och omnejd. Vi känner området och har byggt upp ett starkt förtroende i regionen genom nöjda kunder.",
    },
  ];

  return (
    <Box id="om-oss" sx={{ py: 10, bgcolor: "secondary.main", color: "white" }}>
      <Container maxWidth="xl">
        <SectionTitle title="VARFÖR VÄLJA OSS?" white={true} />
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" sx={{ mb: 3, color: "primary.main" }}>
                Allt Inom Bygg
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#f1f1f1ff", mb: 3, lineHeight: 1.8 }}
              >
                Grundat 2009 av Tomasz Ochlik har Ochlik Bygg AB vuxit till en
                pålitlig partner för både privatpersoner och företag i Markaryd
                och omnejd. Vi erbjuder allt inom bygg - från mindre
                renoveringar till storskaliga nybyggnationer. Oavsett projektets
                omfattning får du samma professionella service och engagemang.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#f1f1f1ff", mb: 3, lineHeight: 1.8 }}
              >
                Trots vår tillväxt har vi behållit vår familjekaraktär och
                personliga service som gör oss unika. Hos oss är ingen kund för
                liten eller för stor - alla projekt är lika viktiga för oss.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#f1f1f1ff", lineHeight: 1.8 }}
              >
                Med över <strong>15 års erfarenhet</strong> och{" "}
                <strong>hundratals nöjda kunder</strong> fortsätter vi att
                leverera byggprojekt av högsta kvalitet. Våra värderingar -{" "}
                <strong>Trygghet, Ansvar och Kunskap</strong> - genomsyrar allt
                vi gör och garanterar att ditt projekt blir en succé.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              sx={{ position: "relative" }}
            >
              <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
                <List sx={{ flex: 1 }}>
                  {features.map((feature, index) => (
                    <ListItem
                      key={index}
                      component={motion.li}
                      whileHover={{ x: 10 }}
                      sx={{
                        py: 2,
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                        "&::before": {
                          content: '"✓"',
                          color: "primary.main",
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          flexShrink: 0,
                        },
                      }}
                    >
                      <Box>
                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#f1f1f1ff" }}>
                          {feature.description}
                        </Typography>
                      </Box>
                    </ListItem>
                  ))}
                </List>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    display: { xs: "none", lg: "block" },
                    flexShrink: 0,
                    alignSelf: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="/favicon.png"
                    alt="Ochlik Bygg AB"
                    sx={{
                      width: 300,
                      height: "auto",
                      opacity: 0.9,
                      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;
