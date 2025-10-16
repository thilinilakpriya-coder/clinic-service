import "../index.css";
import logoWhite from "../assets/hero-blur.jpg";

export default function AboutUsHero() {
  return (
   <section className="hero">
  <div
    className="hero-bg"
    style={{ backgroundImage: `url(${logoWhite})` }}
  />
  <div className="hero-overlay">
    <div className="breadcrumb">Home / About us</div>
  </div>
</section>

  );
}
