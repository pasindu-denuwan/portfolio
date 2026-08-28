import Velaris from "@/components/ui/velaris";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import EducationTimeline from "@/components/EducationTimeline";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Preloader />
      {/* Absolute Background */}
      <div className="fixed inset-0 z-0">
        <Velaris
          bg="#091540"
          colors={["#091540", "#1B2CC1", "#7692FF", "#ABD2FA"]}
          speed={2.5}
          grain={0.15}
          height="100vh"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationTimeline />
        <Achievements />
        <Gallery />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
