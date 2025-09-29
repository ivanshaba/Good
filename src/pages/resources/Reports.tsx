import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import resourcesReportsHeroBg from "@/assets/green.jpg";

const publicationsData = [
  {
    title: "Jubiya Central Forest Reserve – Sustainable and Real Alternatives to Deforestation in Uganda",
    date: "3 July 2025",
    category: "In News, Uganda",
    content: [
      "The rapid demographic growth in Uganda drives an increasing demand for firewood and agricultural land, putting enormous pressure on the country’s forests. As a result, Uganda’s forest cover has been shrinking at an alarming rate, threatening both biodiversity and the livelihoods of local communities.",
      "In the Jubiya forest on the shore of Lake Victoria in Central Uganda, charcoal burning and encroachment by farmers and herders have increased the pressure on the forest. Reducing the impact of such drivers of deforestation requires constructive work with the communities in question.",
      "To find real and long-term solutions, Fairventures supported the project “Development of Sustainable Business Models for Reforestation in Uganda” in Jubiya Forest. Funded by BMZ-IKU and implemented by the Uganda Timber Growers Association (UTGA) in Uganda, a data-driven and scalable business model was developed to restore degraded Central Forest Reserves (CFRs) and improve local community livelihoods.",
      "UTGA led the implementation in Jubiya, combining scientific research, community engagement, and practical restoration actions, and establishing test fields and studies to evaluate the growth performance of various indigenous tree species.",
      "The Jubiya Central Forest Reserve (JCFR) is located in the Masaka District in Central Uganda. It covers more than 4,500 hectares, has a very high biodiversity and is home to around 10,000 people who live in villages around the Reserve. In the past ten years, the JCFR has suffered severe degradation, losing almost 20% of the forest. Restoration and management of 1,000 hectares, nearly a quarter of JCFR, have been approved by the National Forestry Authority (NFA) in Uganda.",
      "UTGA has been working closely with the local communities. The goal of the pilot was to research different ways for people to improve their incomes, mapping the forest area, assessing its resources, and developing a plan for its sustainable management.",
      "A great achievement is the building up of a gender-balanced community steering group. Community engagement remained central, with monthly training sessions and regular steering committee meetings fostering transparency and dialogue. Restoration efforts, though challenged by unpredictable rainfall, showed promising results particularly in test fields where the species Melia Volkensi, Mahogany, and Albizia performed especially well.",
      "Communities expressed appreciation for the project’s impact on both forest health and household livelihoods. Charcoal burning has decreased, encroachment reduced, and interest in cultivating medicinal species like Prunus Africana, and Canarium schweinfurthii is rising. In response, UTGA and FVW plan to distribute these species to interested households.",
      "Recognizing that poverty remains a key driver of deforestation, communities have advocated for diversified livelihood options such as agroforestry, apiculture, and energy-saving stoves training while emphasizing the need for inclusivity across all age groups. In total, over 150 community members participated in the apiculture and energy saving stoves training.",
      "Speaking about the project’s achievements, Moses Otim, the Project Manager, said: “This project has shown that when communities are involved and empowered, restoration becomes more than just planting trees – It becomes a movement. We now have a model that other CFRs can learn from and scale.”",
      "According to Maria Nansikombi, the Research Forester on the project, it’s clear from this initial work that getting the community involved in protecting the forest is a great way to bring it back. “The information we’ve gathered from our studies has helped us put together a tailored business plan for Jubiya CFR. This plan will be important for managing Jubiya moving forward and can also show other CFRs how to achieve sustainable restoration.”",
      "As the Development of Sustainable Business Models for reforestation in Uganda project wraps up its work in Jubiya CFR, it leaves behind more than just studies done. Its true impact is in the lasting change it has set in motion: a model for sustainable forest restoration, a thriving and more resilient ecosystem, and communities empowered to protect their natural heritage."
    ]
  },
  {
    title: "Shaping Climate Solutions: Carbon Workshop at the Timber Innovation Center in Kampala",
    date: "25 April 2025",
    category: "In News, Uganda",
    content: [
      "Fairventures Worldwide Uganda together with TREEO hosted a workshop on Carbon Sequestration at the Timber Innovation Center (TIC). The TIC aims to promote and advance sustainable timber construction in Uganda and wider East Africa. It was built by Fairventures Worldwide and opened in June 2023.",
      "The workshop was held in connection with the visit of Johannes Schwegler, founder of Fairventures Worldwide and CEO of TREEO. It served as a platform for dialogue among stakeholders from civil society, the private sector, and key government ministries and agencies. In attendance were participants from the Ministry of Water and Environment, National Forest Authority, World Food Programme, Food And Agriculture Organisation, Uganda Timber Growers Association.",
      "During the event, our Country Director for Forestry & Operations, James Thembo, gave an inspiring presentation on key findings from our test fields across various regions. He demonstrated how different tree species sequester carbon, showcasing the strong potential of sustainable forestry practices in tackling climate change.",
      "The presentation sparked engaging discussions and was met with enthusiastic feedback, as attendees appreciated both the valuable insights and the chance to connect with like-minded individuals.",
      "Following the presentation, Johannes Schwegler delivered remarks on the critical role of timber and carbon sequestration. His insights provided valuable context on the importance of responsible forestry and timber value chains. Patience Naamara, the moderator for the workshop, thanked the participants for their active engagement, acknowledging the importance of collective efforts in promoting sustainable forestry practices."
    ]
  },
  {
    title: "International Day of Forests – Fairventures Hosts a Quiz Night on Sustainability and Reforestation",
    date: "28 March 2025",
    category: "In Uganda",
    content: [
      "On March 21st, Fairventures Worldwide Uganda celebrated the International Day of Forests by hosting an engaging Quiz Night.",
      "This event brought together participants from various organizations, including the Uganda Revenue Authority, Women in Climate Change, the Ministry of Water and Environment, Kampala City Council Authority, students from Makerere and Kyambogo University, and members of the Climate Action Network. Together, they challenged their understanding of environmental issues in a fun and interactive setting.",
      "James Thembo, Co-Country Director at Fairventures Worldwide, gave the opening remarks, expressing the event’s significance. “Tonight, we are not just engaging in friendly competition, but also fostering important conversations that will help shape the future of forestry and environmental conservation in Uganda.”",
      "The quiz night commenced with a first round of ten questions, which ignited lively discussions and fostered teamwork among participants. After this round, guests enjoyed a relaxed tea break while mingling with colleagues.",
      "With an attendance of over sixty participants and a variety of thought-provoking questions, the quiz night was a resounding success. The closing speaker, Patience Naamara, thanked the participants and encouraged everyone to keep the momentum going."
    ]
  }
];

const ResourcesReports = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${resourcesReportsHeroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-forest-dark/60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div ref={titleRef} className={`transition-all duration-1000 ease-out ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Reports & <span className="text-accent">Publications</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 space-y-16">
          {publicationsData.map((pub, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{pub.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{pub.date} | {pub.category}</p>
              {pub.content.map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesReports;
