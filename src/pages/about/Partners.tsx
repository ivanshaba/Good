import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutPartnersHeroBg from "@/assets/Hoima-29.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutPartners = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollReveal();

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Partner logos
  const partnerLogos = [
    { src: "/Eco.jpeg", alt: "Eco-Agric" },
    {
      src: "/kasese.jpeg",
      alt: "Kasese Youth Polytechnic",
    },
    {
      src: "/kikandwa.jpeg",
      alt: "Kikandwa Environmental Association",
    },
    { src: "/Nawa.jpeg", alt: "nawa" },
    { src: "/people.jpeg", alt: "people" },
    { src: "/ruh.jpeg", alt: "Ruh" },
    { src: "/simon.jpg", alt: "simon" },
    { src: "/ug.jpeg", alt: "ug" },
    { src: "/vision.jpeg", alt: "Ruh" },
  ];

  // Show 3 at once (can adjust based on screen width later)
  const itemsPerView = 3;

  // Auto-slide carousel every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerView) % partnerLogos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const partnerCategories = [
    {
      title: "Government Partners",
      description: "Official partnerships with government agencies and ministries",
      partners: [
        "National Forestry Authority (NFA)",
        "Ministry of Forests, Lands, and Natural Resource Operations",
        "National Environment Management Authority",
      ],
    },
    {
      title: "International Organizations",
      description: "Global partnerships for conservation and development",
      partners: ["FAO", "Fairventures worldwide"],
    },
    {
      title: "Academic Institutions",
      description: "Research and educational partnerships",
      partners: ["Makerere University", "Uganda Christian University"],
    },
    {
      title: "Community Organizations",
      description: "Local partnerships with community groups",
      partners: [
        "Uganda Community Forest Association",
        "Women's Tree Planting Cooperatives",
        "Youth Environmental Groups",
        "Traditional Leader Councils",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutPartnersHeroBg})` }}
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
              Our <span className="text-accent">Partners</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Collaborating with organizations worldwide to create lasting impact in forest
              conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div
            ref={partnersRef}
            className={`transition-all duration-1000 ease-out ${
              partnersVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Partnership Network
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our work is made possible through strong partnerships with government agencies,
                international organizations, academic institutions, and community groups.
              </p>
            </div>

            {/* Categories */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {partnerCategories.map((category, index) => (
                <div
                  key={category.title}
                  className={`bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    partnersVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>

                  <ul className="space-y-3">
                    {category.partners.map((partner, partnerIndex) => (
                      <li
                        key={partnerIndex}
                        className="flex items-center text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ✅ Partner Logos Carousel - FIXED CENTERING */}
            {/* <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-6">Featured Partner Logos</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of organizations we proudly collaborate with.
              </p>
            </div> */}

            <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center items-center gap-12 px-8"
              >
                {Array.from({ length: itemsPerView }).map((_, i) => {
                  const logo = partnerLogos[(currentIndex + i) % partnerLogos.length];
                  return (
                    <div 
                      key={i} 
                      className="flex items-center justify-center flex-shrink-0"
                      style={{ width: `${100 / itemsPerView}%` }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-24 w-auto object-contain transition duration-300 hover:scale-110 hover:brightness-125 hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.8)]"
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-12">Our Partnership Approach</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Collaborative",
                  description:
                    "We work together as equals, combining our strengths and resources for maximum impact.",
                },
                {
                  title: "Transparent",
                  description:
                    "Open communication and shared decision-making ensure all partners are informed and engaged.",
                },
                {
                  title: "Long-term",
                  description:
                    "We build lasting relationships that create sustainable change over time.",
                },
              ].map((approach, index) => (
                <div key={approach.title} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{approach.title}</h3>
                  <p className="text-muted-foreground">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our network of partners working together to protect Uganda's forests and empower
            communities for a sustainable future.
          </p>
          <a
            href="/partners"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors duration-300"
          >
            Partnership Opportunities
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPartners;