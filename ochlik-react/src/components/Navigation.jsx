import { motion } from "framer-motion";
import { AppBar, Toolbar, Box, Link, Container } from "@mui/material";

const Navigation = () => {
  return (
    <AppBar
      position="sticky"
      component={motion.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ bgcolor: "secondary.main" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box>
            <motion.img
              src="/images/logo.gif"
              alt="Ochlik Bygg AB"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              style={{
                height: "55px",
                width: "auto",
                cursor: "pointer",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: { xs: 2, md: 4 } }}>
            {["HEM", "TJÄNSTER", "OM OSS", "KONTAKT"].map((text, index) => (
              <Link
                key={index}
                href={`#${
                  text === "HEM"
                    ? "hem"
                    : text === "TJÄNSTER"
                    ? "tjanster"
                    : text === "OM OSS"
                    ? "om-oss"
                    : "kontakt"
                }`}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  letterSpacing: "1px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-5px",
                    left: 0,
                    width: 0,
                    height: "3px",
                    bgcolor: "#f5c842",
                    transition: "width 0.3s",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
