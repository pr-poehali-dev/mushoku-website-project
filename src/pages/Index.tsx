import HeroSection from "@/components/HeroSection";
import WorldsSection from "@/components/WorldsSection";
import CharactersSection from "@/components/CharactersSection";
import MagicSection from "@/components/MagicSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorldsSection />
      <CharactersSection />
      <MagicSection />
    </div>
  );
};

export default Index;
