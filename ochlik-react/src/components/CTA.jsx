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
  Grid,
  Link,
} from "@mui/material";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

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
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
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
              item 
              xs={12} 
              lg="auto"
              sx={{
                width: { xs: "100%", lg: "calc(30% - 16px)" },
                flexBasis: { xs: "100%", lg: "calc(30% - 16px)" }
              }}
            >
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.1)",
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 0,
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                height: "100%",
                mb: { xs: 0, lg: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  mb: { xs: 2, sm: 3 },
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                }}
              >
                KONTAKTA OSS
              </Typography>

              <Stack spacing={{ xs: 2, sm: 2.5, md: 3 }}>
                {/* Phone */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: { xs: 1.5, sm: 2 },
                  }}
                >
                  <Box
                    sx={{
                      color: "accent.light",
                      mt: 0.5,
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    <FaPhone />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        mb: 0.5,
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                        fontWeight: 600,
                      }}
                    >
                      Telefon
                    </Typography>
                    <Box
                      sx={{
                        mb: 1,
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: { sm: "space-between" },
                        alignItems: { xs: "flex-start", sm: "center" },
                        gap: { xs: 0.25, sm: 0 },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#ddd",
                          fontSize: { xs: "0.9rem", sm: "0.95rem" },
                        }}
                      >
                        Adam Ochlik
                      </Typography>
                      <Link
                        href="tel:0737233536"
                        sx={{
                          color: "#ddd",
                          textDecoration: "none",
                          fontSize: { xs: "0.85rem", sm: "0.95rem" },
                          pl: { xs: 0, sm: 0.625 },
                          "&:hover": { color: "accent.light" },
                        }}
                      >
                        073-723 35 36
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: { sm: "space-between" },
                        alignItems: { xs: "flex-start", sm: "center" },
                        gap: { xs: 0.25, sm: 0 },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#ddd",
                          fontSize: { xs: "0.9rem", sm: "0.95rem" },
                        }}
                      >
                        Tomasz Ochlik
                      </Typography>
                      <Link
                        href="tel:0730940503"
                        sx={{
                          color: "#ddd",
                          textDecoration: "none",
                          fontSize: { xs: "0.85rem", sm: "0.95rem" },
                          pl: { xs: 0, sm: 0.625 },
                          "&:hover": { color: "accent.light" },
                        }}
                      >
                        073-094 05 03
                      </Link>
                    </Box>
                  </Box>
                </Box>

                {/* Email */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: { xs: 1.5, sm: 2 },
                  }}
                >
                  <Box
                    sx={{
                      color: "accent.light",
                      mt: 0.5,
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    <FaEnvelope />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        mb: 0.5,
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                        fontWeight: 600,
                      }}
                    >
                      E-post
                    </Typography>
                    <Link
                      href="mailto:info@ochlikbygg.se"
                      sx={{
                        color: "#ddd",
                        textDecoration: "none",
                        display: "block",
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                        "&:hover": { color: "accent.light" },
                      }}
                    >
                      info@ochlikbygg.se
                    </Link>
                    <Link
                      href="mailto:adam@ochlikbygg.se"
                      sx={{
                        color: "#ddd",
                        textDecoration: "none",
                        display: "block",
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                        "&:hover": { color: "accent.light" },
                      }}
                    >
                      adam@ochlikbygg.se
                    </Link>
                  </Box>
                </Box>

                {/* Address */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: { xs: 1.5, sm: 2 },
                  }}
                >
                  <Box
                    sx={{
                      color: "accent.light",
                      mt: 0.5,
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    <FaMapMarkerAlt />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        mb: 0.5,
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                        fontWeight: 600,
                      }}
                    >
                      Adress
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ddd",
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      }}
                    >
                      Hässleholmsvägen 22
                      <br />
                      285 33 Markaryd
                    </Typography>
                  </Box>
                </Box>

                {/* Business Hours */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: { xs: 1.5, sm: 2 },
                  }}
                >
                  <Box
                    sx={{
                      color: "accent.light",
                      mt: 0.5,
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    <FaClock />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        mb: 0.5,
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                        fontWeight: 600,
                      }}
                    >
                      Öppettider
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ddd",
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      }}
                    >
                      Måndag - Fredag: 07:00 - 17:00
                      <br />
                      Lördag - Söndag: Stängt
                    </Typography>
                  </Box>
                </Box>
              </Stack>

              <Box
                sx={{
                  mt: { xs: 3, md: 4 },
                  pt: { xs: 3, md: 4 },
                  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#ddd",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  }}
                >
                  Vi svarar normalt inom 24 timmar. För brådskande ärenden, ring
                  oss direkt!
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Form Section */}
          <Grid 
            item 
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
                <Box
                  sx={{
                    p: { xs: 1.5, sm: 2 },
                    bgcolor: "rgba(61, 90, 128, 0.05)",
                    border: "1px solid",
                    borderColor: captchaError ? "error.main" : "primary.light",
                    transition: "border-color 0.3s",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: { xs: 1, sm: 1.5 },
                      textAlign: "center",
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
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
                      gap: { xs: 1, sm: 1.5 },
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "primary.main",
                        fontSize: { xs: "1.1rem", sm: "1.3rem" },
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
                        width: { xs: "70px", sm: "80px" },
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "white",
                          fontSize: { xs: "1rem", sm: "1.2rem" },
                          fontWeight: 600,
                          textAlign: "center",
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.main",
                            borderWidth: "2px",
                          },
                        },
                        "& input": {
                          textAlign: "center",
                          padding: { xs: "6px", sm: "8px" },
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
