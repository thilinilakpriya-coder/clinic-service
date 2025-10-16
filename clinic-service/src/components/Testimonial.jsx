import "../index.css";
import illustration from "../assets/testimonial-illustration.png";

export default function Testimonial() {
  return (
    <section className="container testimonial-wrap">
      <div className="testimonial-bg" />
      <div className="testimonial-card" role="article" aria-label="testimonial">
        <img src={illustration} alt="patient" />
        <div className="testimonial-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          </p>
          <div className="testimonial-author">Taniya Jenny</div>
        </div>
      </div>
    </section>
  );
}
