import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import partnersCorporateHeroBg from "@/assets/three.png";

const PartnersCorporate = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${partnersCorporateHeroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-forest-dark/60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div 
            ref={titleRef} 
            className={`transition-all duration-1000 ease-out ${
              titleVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Green <span className="text-accent">Partnerships</span>
            </h1>
            <p className="text-xl lg:text-2xl mt-4 font-light">
              Restoring Uganda's Forests Together
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Empowering Communities, Reviving Ecosystems, and Building a Sustainable Future
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At the Good Forests Foundation Uganda, we believe that the path to environmental resilience lies in 
            collective action. Our Green Partnerships initiative brings together corporations, communities, NGOs, 
            and individuals to combat deforestation, restore degraded landscapes, and foster sustainable livelihoods. 
            By partnering with us, you're not just investing in trees, you're investing in people, biodiversity, and 
            a greener Uganda.
          </p>
        </div>
      </section>

      {/* Why Partnerships Matter */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Why Green Partnerships Matter
          </h2>
          <p className="text-muted-foreground mb-6">
            Uganda's forests are under siege. Once covering vast expanses that supported agriculture, wildlife, 
            and tourism, our forest cover has dwindled dramatically over the past century due to deforestation 
            rates exceeding 500 km² annually. Today, forests account for just 24% of our land area, yet they remain 
            vital: providing over 90% of household energy, regulating water cycles, and harboring biodiversity hotspots.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3">
            <li><strong>Mobilizing Resources:</strong> Combining funding, expertise, and manpower for large-scale reforestation.</li>
            <li><strong>Empowering Locals:</strong> Training smallholder farmers in agroforestry to integrate trees with crops, boosting incomes while conserving soil and water.</li>
            <li><strong>Driving Impact:</strong> Through carbon credit programs and collaborative management, we restore reserves, capture CO₂, and create jobs.</li>
          </ul>
          <p className="text-muted-foreground mt-6">
            Our model draws from successful collaborations, such as those with the National Forestry Authority (NFA) 
            and Uganda Revenue Authority (URA), where corporate tree-planting has revitalized central forest reserves.
          </p>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Join Our Green Partnerships
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Businesses</h3>
              <p className="text-muted-foreground">
                Offset emissions, enhance your sustainability profile, and engage employees in on-ground activities. 
                Contact us for customized partnership packages.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Communities & NGOs</h3>
              <p className="text-muted-foreground">
                Access training, seedlings, and funding for joint projects to restore degraded lands and support livelihoods.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Individuals</h3>
              <p className="text-muted-foreground">
                Donate, volunteer, or purchase carbon credits to support our work and be part of Uganda’s green future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Get Involved Today</h2>
          <p className="text-muted-foreground mb-4">
            Ready to take action and make a difference? Partner with us to restore forests, empower communities, and build resilience.
          </p>
          <p className="text-lg text-foreground font-semibold">Email: <a href="mailto:partnerships@goodforestsuganda.org" className="text-accent">partnerships@goodforestsuganda.org</a></p>
          <p className="text-lg text-foreground font-semibold">Phone: +256 754 458 384</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersCorporate;
