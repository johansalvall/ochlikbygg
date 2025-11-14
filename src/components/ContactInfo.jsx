import { motion } from "framer-motion";
import { Box, Typography, Stack, Link } from "@mui/material";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

/**
 * ContactInfo component - displays company contact information
 * Extracted from CTA component for reusability
 */
const ContactInfo = () => {
  return (
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
          Vi svarar normalt inom 24 timmar. För brådskande ärenden, ring oss
          direkt!
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactInfo;
