import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import AboutArchitect from './components/AboutArchitect';
import TechStackMarquee from './components/TechStackMarquee';
import BuildsGrid from './components/BuildsGrid';
import ArchitectureShowcase from './components/ArchitectureShowcase';
import RoiCalculator from './components/RoiCalculator';
import AssetHandover from './components/AssetHandover';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-white selection:text-black">
      {/* Visual background layers */}
      <Background3D />
      <div className="bg-noise" />
      <div className="bg-glow" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <TechStackMarquee />
        <AboutArchitect />
        <BuildsGrid />
        <ArchitectureShowcase />
        <RoiCalculator />
        <Philosophy />
        <AssetHandover />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
