import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import References from "./components/References";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Hero />
      <References />
      <WhyUs />
      <CTA />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
