import { motion } from 'framer-motion'
import { Box, Container, Grid, Typography, List, ListItem } from '@mui/material'
import SectionTitle from './SectionTitle'

const WhyUs = () => {
  const features = [
    {
      title: "Erfarna Hantverkare",
      description: "Alla våra medarbetare är certifierade och erfarna inom sina respektive områden."
    },
    {
      title: "Kompletta Lösningar",
      description: "Goda kontakter inom el, VVS och måleri ger oss möjlighet att hantera hela projekt."
    },
    {
      title: "Återkommande Kunder",
      description: "Vår höga andel återkommande kunder visar på kvaliteten i vårt arbete."
    },
    {
      title: "Lokalt Förankrade",
      description: "Vi känner området och har byggt upp ett starkt förtroende i regionen."
    }
  ]

  return (
    <Box id="om-oss" sx={{ py: 10, bgcolor: 'secondary.main', color: 'white' }}>
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
              <Typography variant="h3" sx={{ mb: 3, color: 'primary.main' }}>
                Vår Historia
              </Typography>
              <Typography variant="body1" sx={{ color: '#ddd', mb: 3 }}>
                Grundat 2009 av Tomasz Ochlik har Ochlik Bygg AB utvecklats till en ledande byggfirma i Markaryd.
                Trots vår tillväxt har vi behållit vår familjekaraktär och personliga service som gör oss unika.
              </Typography>
              <Typography variant="body1" sx={{ color: '#ddd' }}>
                Med över 15 års erfarenhet och hundratals nöjda kunder fortsätter vi att leverera byggprojekt av högsta kvalitet.
                Våra värderingar - <strong>Trygghet, Ansvar och Kunskap</strong> - genomsyrar allt vi gör.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <List>
                {features.map((feature, index) => (
                  <ListItem
                    key={index}
                    component={motion.li}
                    whileHover={{ x: 10 }}
                    sx={{
                      py: 2,
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      '&::before': {
                        content: '"✓"',
                        color: 'primary.main',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        flexShrink: 0,
                      }
                    }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ mb: 0.5 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#ddd' }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default WhyUs
