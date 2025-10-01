import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import jubiyaHeroBg from "@/assets/JUBIYA.jpg";

const JubiyaProject = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${jubiyaHeroBg})` }}
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
              The <span className="text-accent">Jubiya Project</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Advancing forest restoration, climate resilience, and community livelihoods in Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* CFR Partnerships Section */}
      <section className="py-20 bg-background">
        <div
          ref={contentRef}
          className={`container mx-auto px-6 max-w-5xl transition-all duration-1000 ease-out ${
            contentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-foreground text-center">
            Partnerships in Community Forest Reserves (CFRs)
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Good Forests Foundation Uganda is partnering with community groups in{" "}
            <strong>Kyenjojo</strong> and <strong>Kasese Districts</strong> to
            restore degraded Central Forest Reserves (CFRs) through{" "}
            <strong>Collaborative Forest Management (CFM)</strong>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Since 2022, we have supported{" "}
            <strong>Nyamwezi CFM</strong> in managing{" "}
            <strong>50 hectares of Kagora CFR</strong> and private farmers
            licensed within <strong>Mubuku CFR</strong> (Kasese). In 2023, we
            began working with{" "}
            <strong>Kajuma Itwara Farmers Environment Conservation Association
            (KIFECA)</strong> in Kyenjojo, which manages{" "}
            <strong>450 hectares of Itwara CFR</strong>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            These groups are trained in{" "}
            <strong>sustainable tree planting, agroforestry, beekeeping</strong>,
            and <strong>forest monitoring</strong>, and continue to receive
            refresher training. They are supplied with diverse seedlings from
            our <strong>Kyenjojo nursery</strong> during planting seasons while
            restoring degraded areas and integrating food crops with trees.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GFU continues to actively work in these CFRs, advancing forest
            restoration, strengthening climate resilience, and creating
            sustainable livelihood opportunities for local communities.
          </p>
        </div>
      </section>

      {/* FMNR – Jubiya CFR Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 text-foreground text-center">
            FMNR – Jubiya Central Forest Reserve
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Good Forests Foundation Uganda is restoring{" "}
            <strong>Jubiya Central Forest Reserve</strong> in Masaka District, a
            vital water catchment along the shores of Lake Victoria, Bukakata
            subcounty. Through{" "}
            <strong>Farmer Managed Natural Regeneration (FMNR)</strong>, we are
            protecting tree stumps and encouraging the regrowth of naturally
            sprouting seedlings.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            FMNR restores degraded land faster and more cost-effectively than
            traditional planting. The project has been introduced to the
            Steering Committee, where meetings focus on forest inspections and
            member updates. Training equips committee members and rangers with
            practical skills in tree care, growth monitoring, and species
            identification—starting in <strong>Bwami Village</strong> and
            expanding to nearby communities.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Regular inspections identify illegal activities such as unauthorized
            farming, charcoal burning, and timber harvesting, highlighting the
            need for strong monitoring and quick action to protect the forest.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            By linking restoration with stronger livelihoods, the Jubiya FMNR
            project safeguards water sources, strengthens community resilience,
            and creates greener landscapes for future generations.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JubiyaProject;
