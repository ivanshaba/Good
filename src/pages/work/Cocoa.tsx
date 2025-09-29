import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import workCocoaHeroBg from "@/assets/view.jpg";

const WorkCocoa = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${workCocoaHeroBg})` }}
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
              Cocoa Pilot Project –{" "}
              <span className="text-accent">Kasese District</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Building resilient, profitable, and environmentally sustainable
              cocoa farming communities.
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
              The two-year pilot, launched in <strong>July 2025</strong> in
              Kasese District, targets{" "}
              <strong>80 smallholder cocoa farmers</strong> who rely on cocoa as
              their primary source of income. The project aims to improve both{" "}
              <strong>livelihoods</strong> and{" "}
              <strong>environmental outcomes</strong> by equipping farmers with
              practical skills and resources.
            </p>

            <p>
              Farmers are trained in <strong>good agricultural practices</strong>
              , including field sanitation, post-harvest handling, and grafting
              of high-yield varieties, which is expected to{" "}
              <strong>increase yields by at least 30%</strong>. The project also
              involves <strong>seedling distribution</strong>,{" "}
              <strong>mapping of the cocoa value chain</strong> to improve
              market access and farm-gate prices, and{" "}
              <strong>organizing farmers into groups</strong> for collective
              marketing.
            </p>

            <p>
              The initiative emphasizes <strong>women’s participation</strong>{" "}
              and integrates cocoa cultivation into broader reforestation and{" "}
              <strong>climate-smart practices</strong>, fostering resilient,
              profitable, and environmentally sustainable cocoa farming
              communities.
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
                title: "Good Agricultural Practices",
                description:
                  "Training in field sanitation, grafting of high-yield varieties, and post-harvest handling.",
              },
              {
                title: "Seedling Distribution",
                description:
                  "Providing improved cocoa seedlings to boost yields and resilience.",
              },
              {
                title: "Market Access",
                description:
                  "Mapping the cocoa value chain to improve farm-gate prices and link farmers to better markets.",
              },
              {
                title: "Collective Marketing",
                description:
                  "Organizing farmers into groups for stronger bargaining power and profitability.",
              },
              {
                title: "Women’s Participation",
                description:
                  "Ensuring women are actively involved in decision-making, training, and leadership roles.",
              },
              {
                title: "Climate-Smart Integration",
                description:
                  "Incorporating cocoa farming into broader reforestation and sustainable land management efforts.",
              },
            ].map((item, index) => (
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
                number: "30%+",
                label: "Increase in Yields",
                description:
                  "Farmers expected to achieve higher productivity through improved practices.",
              },
              {
                number: "80",
                label: "Farmers Reached",
                description:
                  "Direct beneficiaries empowered with training and resources.",
              },
              {
                number: "2 Years",
                label: "Pilot Duration",
                description:
                  "Ensuring long-term learning, monitoring, and impact measurement.",
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

export default WorkCocoa;
