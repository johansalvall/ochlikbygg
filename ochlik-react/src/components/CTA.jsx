import { useState } from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Typography, TextField, Button, Stack, Alert, Snackbar } from '@mui/material'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [openSuccess, setOpenSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setOpenSuccess(true)
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    })
  }

  const handleCloseSnackbar = () => {
    setOpenSuccess(false)
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8555 100%)',
        py: 10,
      }}
    >
      <Container maxWidth="md">
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mb: 4 }}
        >
          <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
            REDO ATT STARTA DITT PROJEKT?
          </Typography>
          <Typography variant="h5" sx={{ color: 'white', mb: 4 }}>
            Fyll i formuläret nedan för en kostnadsfri konsultation och offert!
          </Typography>
        </Box>

        <Box
          component={motion.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          sx={{
            bgcolor: 'white',
            p: 4,
            borderRadius: 0,
          }}
        >
          <Stack spacing={3}>
            <TextField
              fullWidth
              required
              label="Namn"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: '2px',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'primary.main',
                },
              }}
            />
            <TextField
              fullWidth
              required
              label="Telefonnummer"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: '2px',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'primary.main',
                },
              }}
            />
            <TextField
              fullWidth
              required
              label="E-postadress"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: '2px',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'primary.main',
                },
              }}
            />
            <TextField
              fullWidth
              required
              label="Beskriv ditt projekt och dina behov"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={6}
              variant="outlined"
              placeholder="Berätta om ditt projekt, vilka tjänster du är intresserad av och när du skulle vilja påbörja arbetet..."
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: '2px',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'primary.main',
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  py: 2,
                  px: 6,
                  fontSize: '1.1rem',
                  bgcolor: 'secondary.main',
                  color: 'white',
                  minWidth: '300px',
                  '&:hover': {
                    bgcolor: '#0d0d0d',
                  },
                }}
              >
                SKICKA FÖRFRÅGAN
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>

      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Tack för din förfrågan! Vi återkommer så snart som möjligt.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default CTA
