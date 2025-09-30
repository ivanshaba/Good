import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import workFmnrHeroBg from "@/assets/view.jpg";

const WorkFmnr = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${workFmnrHeroBg})` }}
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
              FMNR –{" "}
              <span className="text-accent">Jubiya Central Forest Reserve</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Restoring degraded land and empowering communities through Farmer
              Managed Natural Regeneration.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
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
              Good Forests Foundation Uganda is restoring{" "}
              <strong>Jubiya Central Forest Reserve</strong> in Masaka District,
              a vital water catchment along the shores of Lake Victoria,
              Bukakata subcounty. Through{" "}
              <strong>Farmer Managed Natural Regeneration (FMNR)</strong>, the
              project protects existing tree stumps and encourages naturally
              sprouting seedlings. This method restores degraded land faster and
              more cost effectively than traditional planting.
            </p>

            <p>
              The project has been introduced to the Steering Committee, with
              ongoing meetings focused on findings from forest inspections and
              addressing updates from members. FMNR is helping communities
              restore degraded land while{" "}
              <strong>
                improving soil fertility, boosting crop yields, providing
                firewood and fodder, and building resilience to climate extremes
              </strong>
              .
            </p>

            <p>
              A <strong>training program</strong> equips committee members and
              forest rangers with practical skills in tree care, growth
              monitoring, and species identification. Starting in{" "}
              <strong>Bwami Village</strong>, activities are gradually expanding
              to surrounding communities.
            </p>

            <p>
              Regular forest inspections help identify illegal activities such
              as unauthorized farming, charcoal burning, and timber harvesting.
              This underlines the importance of{" "}
              <strong>coordination, monitoring, and quick action</strong> to
              safeguard the forest. By linking forest restoration with stronger
              livelihoods, the FMNR project is{" "}
              <strong>
                protecting water sources, enhancing resilience, and creating
                greener landscapes for future generations
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            Project Components
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Natural Regeneration",
                description:
                  "Protecting tree stumps and encouraging regrowth of naturally sprouting seedlings.",
              },
              {
                title: "Community Empowerment",
                description:
                  "Training committee members and rangers in tree care, monitoring, and species identification.",
              },
              {
                title: "Forest Inspections",
                description:
                  "Regular patrols to identify and address illegal activities like farming and charcoal burning.",
              },
              {
                title: "Livelihood Support",
                description:
                  "Restoring land to improve soil fertility, crop yields, firewood, and fodder availability.",
              },
              {
                title: "Climate Resilience",
                description:
                  "Building community resilience to climate extremes through sustainable forest management.",
              },
              {
                title: "Expansion Plan",
                description:
                  "Starting in Bwami Village and gradually extending restoration efforts to nearby communities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Expected Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "Faster",
                label: "Land Restoration",
                description:
                  "FMNR restores degraded areas quicker and more cost-effectively than tree planting.",
              },
              {
                number: "Improved",
                label: "Soil & Yields",
                description:
                  "Communities benefit from better soil fertility, higher yields, and more firewood and fodder.",
              },
              {
                number: "Resilient",
                label: "Communities",
                description:
                  "Stronger adaptation to climate extremes and healthier landscapes for future generations.",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkFmnr;
