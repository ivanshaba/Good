import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import stayTreeHero from "@/assets/green.jpg"; // Replace with your project image

const TreePlanting = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${stayTreeHero})` }}
        ></div>
        <div className="absolute inset-0 bg-forest-dark/60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div
            ref={titleRef}
            className={`transition-all duration-1000 ease-out ${
              titleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Tree <span className="text-accent">Planting</span> Project
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Improving farmer livelihoods and restoring Uganda’s forests.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div
            ref={contentRef}
            className={`transition-all duration-1000 ease-out ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
              Project Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The <strong>STAY TREE project</strong>, which concluded in{" "}
              <strong>April 2024</strong>, aimed to improve farmer livelihoods
              and promote environmental sustainability through{" "}
              <strong>reforestation</strong> and{" "}
              <strong>sustainable cash crop production</strong> in Uganda’s
              Central and Eastern regions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The project improved sustainable land use practices through
              farmers’ engagement where <strong>408 farmers</strong> were
              nominated, supported through project mapping, distributed{" "}
              <strong>96,000 seedlings</strong>, and trained in{" "}
              <strong>agroforestry</strong> and <strong>vegetable gardening</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The program effectively increased farmer capacity, encouraged
              community-based environmental stewardship, and established a solid
              foundation for future sustainability efforts, such as{" "}
              <strong>nursery bed maintenance</strong> and{" "}
              <strong>continued support</strong> for farmers beyond the
              project’s completion.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TreePlanting;
