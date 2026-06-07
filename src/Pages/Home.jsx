import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <footer className="footer">
        © 2026 CleanTrack AI | Smart Reporting for Cleaner Cities
      </footer>
    </>
  );
}

export default Home;