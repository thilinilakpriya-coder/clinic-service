import Navbar from "../components/Navbar";
import AboutUsHero from "../components/AboutUsHero";
import AboutHistory from "../components/AboutHistory";
import StatsSection from "../components/StatsSection";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

export default function About(){
  return (
    <div>
      
      <AboutUsHero />
      <AboutHistory />
      <StatsSection />
      <h3 style={{textAlign:'center', marginTop:80, fontSize:28, fontWeight:800}}>TESTIMONIAL</h3>
      <Testimonial />
      
    </div>
  );
}
