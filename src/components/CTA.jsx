import { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  Stack,
  Grid,
} from "@mui/material";
import ContactInfo from "./ContactInfo";
import CaptchaField from "./CaptchaField";
import { useCaptcha } from "../hooks/useCaptcha";
import { fadeInUp } from "../animations/variants";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [openSuccess, setOpenSuccess] = useState(false);

  // Use custom CAPTCHA hook
  const {
    captchaQuestion,
    captchaInput,
    captchaError,
    handleCaptchaChange,
    validateCaptcha,
    resetCaptcha,
  } = useCaptcha();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verify CAPTCHA using the hook's validation
    if (!validateCaptcha()) {
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    setOpenSuccess(true);

    // Reset form and generate new CAPTCHA
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    resetCaptcha();
  };

  const handleCloseSnackbar = () => {
    setOpenSuccess(false);
  };

  return (
    <Box
      id="kontakt"
      sx={{
        background: "linear-gradient(135deg, #3d5a80 0%, #2a3f5f 100%)",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1.5, sm: 3 } }}>
        <Box
          component={motion.div}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 4 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              mb: 2,
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            REDO ATT STARTA DITT PROJEKT?
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              mb: { xs: 3, md: 4 },
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
            }}
          >
            Fyll i formuläret nedan för en kostnadsfri konsultation och offert!
          </Typography>
        </Box>

        <Box sx={{ 
          display: "flex", 
          justifyContent: "center",
          width: "100%"
        }}>
          <Grid 
            container 
            spacing={{ xs: 3, sm: 3, md: 4 }}
            sx={{
              maxWidth: { xs: "100%", lg: "1200px" },
              width: "100%",
              margin: "0 auto",
              justifyContent: "center"
            }}
          >
            {/* Contact Information Section */}
            <Grid 
              xs={12} 
              lg="auto"
              sx={{
                width: { xs: "100%", lg: "calc(30% - 16px)" },
                flexBasis: { xs: "100%", lg: "calc(30% - 16px)" }
              }}
            >
              <ContactInfo />
          </Grid>

          {/* Form Section */}
          <Grid 
            xs={12} 
            lg="auto"
            sx={{
              width: { xs: "100%", lg: "calc(70% - 16px)" },
              flexBasis: { xs: "100%", lg: "calc(70% - 16px)" }
            }}
          >
            <Box
              component={motion.form}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              sx={{
                bgcolor: "white",
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 0,
                height: "100%",
              }}
            >
              <Stack spacing={{ xs: 2, sm: 2.5, md: 3 }}>
                <TextField
                  fullWidth
                  required
                  label="Namn"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                        borderWidth: "2px",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "primary.main",
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
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                        borderWidth: "2px",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "primary.main",
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
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                        borderWidth: "2px",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "primary.main",
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
                  rows={4}
                  variant="outlined"
                  placeholder="Berätta om ditt projekt, vilka tjänster du är intresserad av och när du skulle vilja påbörja arbetet..."
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                        borderWidth: "2px",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "primary.main",
                    },
                  }}
                />

                {/* Custom CAPTCHA - Math Question */}
                <CaptchaField
                  captchaQuestion={captchaQuestion}
                  captchaInput={captchaInput}
                  captchaError={captchaError}
                  onChange={handleCaptchaChange}
                />

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={parseInt(captchaInput) !== captchaQuestion.answer}
                    sx={{
                      py: { xs: 1.5, sm: 2 },
                      px: { xs: 4, sm: 6 },
                      fontSize: { xs: "0.95rem", sm: "1.1rem" },
                      bgcolor: "primary.main",
                      color: "white",
                      minWidth: { xs: "200px", sm: "300px" },
                      width: { xs: "100%", sm: "auto" },
                      "&:hover": {
                        bgcolor: "#0d0d0d",
                      },
                      "&.Mui-disabled": {
                        bgcolor: "#ccc",
                        color: "#888",
                      },
                    }}
                  >
                    SKICKA FÖRFRÅGAN
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Container>

      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Tack för din förfrågan! Vi återkommer så snart som möjligt.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CTA;
