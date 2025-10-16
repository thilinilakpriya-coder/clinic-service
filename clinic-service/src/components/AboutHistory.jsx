import "../index.css";
import doctors from "../assets/doctors.jpg";

export default function AboutHistory() {
  return (
    <section className="container" aria-labelledby="about-heading">
      <div className="about-grid">
        <div>
          <h2 id="about-heading" className="about-title">MediCare History</h2>
          <p className="about-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus
            mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi.
          </p>

          <p className="about-copy" style={{ marginTop: 12 }}>
            Sed est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <a className="read-btn" href="/about-more">Read More</a>
        </div>

        <div>
          <img className="doctor-photo" src={doctors} alt="Doctors" />
        </div>
      </div>
    </section>
  );
}
