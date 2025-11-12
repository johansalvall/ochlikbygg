import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'

const SectionTitle = ({ title, white = false }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      sx={{ textAlign: 'center', mb: 6 }}
    >
      <Typography
        variant="h2"
        sx={{ color: white ? 'white' : 'text.primary' }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: '100px',
          height: '5px',
          bgcolor: 'primary.main',
          mx: 'auto',
          mt: 2
        }}
      />
    </Box>
  )
}

export default SectionTitle
