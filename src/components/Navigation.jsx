import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { text: "HEM", href: "hem" },
    { text: "TJÄNSTER", href: "referenser" },
    { text: "OM OSS", href: "om-oss" },
    { text: "KONTAKT", href: "kontakt" },
  ];

  return (
    <>
      <AppBar
        position="absolute"
        component={motion.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        elevation={0}
        sx={{
          marginTop: 1,
          bgcolor: "transparent",
          boxShadow: "none",
          background: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box>
              <Link href="#hem" sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component={motion.img}
                  src="/images/combined_logo.png"
                  alt="Ochlik Bygg AB"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    height: { xs: "80px", sm: "90px", md: "100px", lg: "130px" },
                    width: "auto",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </Box>
            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.href}`}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    letterSpacing: "1px",
                    position: "relative",
                    display: "inline-block",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-5px",
                      left: 0,
                      width: 0,
                      height: "3px",
                      bgcolor: "#f5c842",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{ display: { xs: "block", md: "none" }, color: "white" }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <FaBars size={24} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            bgcolor: "secondary.main",
            color: "white",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{ color: "white" }}
          >
            <FaTimes size={24} />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} sx={{ py: 0 }}>
              <Link
                href={`#${item.href}`}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  letterSpacing: "1px",
                  width: "100%",
                  py: 2,
                  px: 3,
                  display: "block",
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    borderLeft: "4px solid #f5c842",
                    paddingLeft: "calc(1.5rem - 4px)",
                  },
                }}
              >
                {item.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
