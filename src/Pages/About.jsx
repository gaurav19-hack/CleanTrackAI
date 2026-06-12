import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-section">
        <h2>About CleanTrack AI</h2>

        <p className="about-description">
          CleanTrack AI is an AI-powered civic issue reporting platform
          designed to help citizens report sanitation issues,
          track complaints and improve transparency.
        </p>
      </section>
    </>
  );
}

export default About;