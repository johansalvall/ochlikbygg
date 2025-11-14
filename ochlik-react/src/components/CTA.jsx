import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Snackbar,
} from "@mui/material";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [openSuccess, setOpenSuccess] = useState(false);

  // Custom CAPTCHA state
  const [captchaQuestion, setCaptchaQuestion] = useState({
    num1: 0,
    num2: 0,
    answer: 0,
  });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  // Generate a new math question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; // 1-10
    const answer = num1 + num2;
    setCaptchaQuestion({ num1, num2, answer });
    setCaptchaInput("");
    setCaptchaError(false);
  };

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
    setCaptchaError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verify CAPTCHA
    if (parseInt(captchaInput) !== captchaQuestion.answer) {
      setCaptchaError(true);
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
    generateCaptcha();
  };

  const handleCloseSnackbar = () => {
    setOpenSuccess(false);
  };

  return (
    <Box
      id="kontakt"
      sx={{
        background: "linear-gradient(135deg, #3d5a80 0%, #2a3f5f 100%)",
        py: 10,
      }}
    >
      <Container maxWidth="md">
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 4 }}
        >
          <Typography variant="h2" sx={{ color: "white", mb: 2 }}>
            REDO ATT STARTA DITT PROJEKT?
          </Typography>
          <Typography variant="h5" sx={{ color: "white", mb: 4 }}>
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
            bgcolor: "white",
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
              rows={6}
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
            <Box
              sx={{
                p: 2,
                bgcolor: "rgba(61, 90, 128, 0.05)",
                border: "1px solid",
                borderColor: captchaError ? "error.main" : "primary.light",
                transition: "border-color 0.3s",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 1.5,
                  textAlign: "center",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}
              >
                Säkerhetsverifiering: Lös följande uppgift
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    fontSize: "1.3rem",
                  }}
                >
                  {captchaQuestion.num1} + {captchaQuestion.num2} =
                </Typography>
                <TextField
                  required
                  type="number"
                  value={captchaInput}
                  onChange={handleCaptchaChange}
                  placeholder="?"
                  error={captchaError}
                  sx={{
                    width: "80px",
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "white",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      textAlign: "center",
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                        borderWidth: "2px",
                      },
                    },
                    "& input": {
                      textAlign: "center",
                      padding: "8px",
                    },
                  }}
                />
              </Box>
              {captchaError && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "error.main",
                    fontWeight: 600,
                    textAlign: "center",
                    mt: 1,
                    fontSize: "0.85rem",
                  }}
                >
                  Fel svar. Försök igen!
                </Typography>
              )}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={parseInt(captchaInput) !== captchaQuestion.answer}
                sx={{
                  py: 2,
                  px: 6,
                  fontSize: "1.1rem",
                  bgcolor: "primary.main",
                  color: "white",
                  minWidth: "300px",
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
