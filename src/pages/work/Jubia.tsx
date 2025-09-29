import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import workJubiaHeroBg from "@/assets/smile.png";

const WorkJubia = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${workJubiaHeroBg})` }}
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
              FMNR – <span className="text-accent">Jubiya Central Forest Reserve</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Restoring degraded land and empowering communities along the shores of Lake Victoria.
            </p>
          </div>
        </div>
      </section>

      {/* FMNR Project Content */}
      <section className="py-20 bg-background">
        <div
          ref={contentRef}
          className={`container mx-auto px-6 max-w-5xl transition-all duration-1000 ease-out ${
            contentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="prose prose-lg lg:prose-xl max-w-none text-foreground">
            <p>
              Good Forests Foundation Uganda is restoring Jubiya Central Forest Reserve in Masaka District, 
              which is a vital water catchment along the shores of Lake Victoria, Bukakata subcounty. 
              Through <strong>Farmer Managed Natural Regeneration (FMNR)</strong>, we are utilizing natural 
              regeneration by protecting existing tree stumps and encouraging the regrowth of naturally sprouting seedlings.
            </p>

            <p>
              This method restores degraded land more quickly and is more cost effective than traditional 
              planting approaches. The FMNR project has been introduced to the Steering Committee, and 
              ongoing meetings are focusing on discussing findings from forest inspections and addressing 
              updates from committee members.
            </p>

            <p>
              FMNR is empowering communities to restore degraded land while improving soil fertility, 
              increasing crop yields, providing firewood and fodder, and building resilience to climate extremes. 
              A training program is in place to empower committee members and forest rangers with practical skills 
              in tree care, growth monitoring, and species identification, ensuring effective management of 
              regenerating forests, starting in Bwami Village and gradually expanding to surrounding communities.
            </p>

            <p>
              Regular forest inspections are carried out to identify illegal activities such as unauthorized 
              farming, charcoal burning, and timber harvesting. This highlights the need for coordination, 
              monitoring & quick action to protect the forest.
            </p>

            <p>
              By linking forest restoration with stronger livelihoods, the FMNR project is safeguarding water sources, 
              enhancing community resilience, and creating healthier, greener landscapes for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Community Empowerment Testimonials
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Hear from local farmers and community members about how FMNR is transforming lives and landscapes.
          </p>

          {/* Placeholder for future video testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-card rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-muted-foreground">[ Video Testimonial Placeholder ]</span>
            </div>
            <div className="aspect-video bg-card rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-muted-foreground">[ Video Testimonial Placeholder ]</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkJubia;
