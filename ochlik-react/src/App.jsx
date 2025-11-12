import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import References from "./components/References";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Hero />
      <Services />
      <References />
      <WhyUs />
      <CTA />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
