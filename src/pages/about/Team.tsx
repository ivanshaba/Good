import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";
import aboutTeamHeroBg from "@/assets/Hoima-29.png";

const AboutTeam = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: teamRef, isVisible: teamVisible } = useScrollReveal();

  // --- Data ---
  const boardMembers = [
    { name: "Patience Naamara", role: "Founder", initials: "PN" },
    { name: "Justus Karuhanga", role: "Member", initials: "JK" },
    { name: "Hope Asiimwe", role: "Member", initials: "HA" },
    { name: "Esther Nekesa", role: "Member", initials: "EN" },
    { name: "Daniel Ojoo", role: "Member", initials: "DO" },
    { name: "Joseph Epitu", role: "Member", initials: "JE" }
  ];

  const management = [
    { name: "James Thembo", role: "Director", initials: "JT" },
    { name: "Colline Mugabi Wangi", role: "Head of Field Operations", initials: "CW" },
    { name: "Peter Econi", role: "L&P Office", initials: "PE" },
    { name: "Ronald Lubowa", role: "Logistics & Admin Assistant", initials: "RL" },
    { name: "Susan Ninsiima", role: "Finance Officer", initials: "SN" },
    { name: "Jane Nakirijja", role: "Accountant Assistant", initials: "JN" },
    { name: "Sarah Nuwahereza", role: "Finance Officer (IKU2)", initials: "SN" },
    { name: "Esther Musaniwabo", role: "Comms Graduate Trainee", initials: "EM" },
    { name: "Susan Maraka", role: "HR Office", initials: "SM" },
    { name: "Mercy Ainembabazi", role: "Administrative Assistant", initials: "MA" },
    { name: "Sumaya Namulodi", role: "Office Assistant", initials: "SN" },
    { name: "Ronald Mwikirize", role: "Office Administrator (Fortportal)", initials: "RM" },
    { name: "Godfrey Osuna", role: "Caretaker (Fortportal)", initials: "GO" },
    { name: "Marai Nansikombi", role: "Research Officer", initials: "MN" },
    { name: "Paul Oweka", role: "Community Liaison Officer", initials: "PO" },
    { name: "Bridget Atuhwera", role: "Project Assistant", initials: "BA" },
    { name: "Janet Rose Aguti", role: "GIS Officer", initials: "JA" },
    { name: "Mercy Adeka", role: "GIS Graduate Trainee", initials: "MA" },
    { name: "Ronald Kayanja", role: "Data Assistant", initials: "RK" }
  ];

  const fieldTeam = [
    { name: "Simon Okiria", role: "FFC - Kasese, Fortportal & Kyenjojo", initials: "SO" },
    { name: "Samuel Baker Okello", role: "FFC - Rukungiri & Ntugamo", initials: "SB" },
    { name: "Isaac SSebuyira Kitiibwa", role: "FFC - Hoima, Tororo, Kampala & Kayunga", initials: "IK" },
    { name: "Stephen Baluku", role: "FTF - Kasese Youth Polytechnic", initials: "SB" },
    { name: "Emmy Masereka", role: "FTF - Kasese District (Bwera)", initials: "EM" },
    { name: "Rodgers Bwambale", role: "FTF - Kasese District (Vision)", initials: "RB" },
    { name: "Geofrey Mumbere", role: "FTF - Kasese Youth Polytechnic", initials: "GM" },
    { name: "Godwin Muhindo", role: "FTF - Kasese District (Holy Dove)", initials: "GM" },
    { name: "Nafutali Bwambale", role: "FTF - Fortportal City", initials: "NB" },
    { name: "Bernard Ntajumba", role: "Nursery Coordinator", initials: "BN" },
    { name: "Martin Agaba", role: "FTF - Ntungamo District", initials: "MA" },
    { name: "Dickens Muhumuza", role: "FTF - Rukungiri District", initials: "DM" },
    { name: "Simon Jacob Ssekkajja", role: "FTF - Kaazi", initials: "SS" },
    { name: "Junor Ampumuza", role: "FTF - Hoima District", initials: "JA" },
    { name: "Alfred Adomati", role: "FTF - Kayunga District", initials: "AA" },
    { name: "Jude Okello", role: "FTF - Tororo (Kirewa)", initials: "JO" },
    { name: "Bosco Tumushime", role: "FTF - Fortportal City", initials: "BT" },
    { name: "Brenda Nyabosi", role: "Nursery Operator - Kasese Youth Polytechnic", initials: "BN" },
    { name: "Scovia Tukamuhebwa", role: "Nursery Operator - Kasese Youth Polytechnic", initials: "ST" },
    { name: "Joshua Ategeka", role: "Nursery Operator - Fortportal City", initials: "JA" },
    { name: "Justine Asaba", role: "Nursery Operator - Hoima (St Simon Peters)", initials: "JA" },
    { name: "Mary Kemigisa", role: "Nursery Operator - Hoima (St Simon Peters)", initials: "MK" },
    { name: "Charles Owor", role: "Nursery Operator - Tororo (Kirewa)", initials: "CO" }
  ];

  // --- Helper component ---
  const TeamGrid = ({ title, members }) => (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-center mb-10">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div
            key={member.name}
            className={`bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center ${
              teamVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Avatar className="w-24 h-24 mx-auto mb-6">
              <AvatarImage src="/placeholder.svg" alt={member.name} />
              <AvatarFallback className="text-xl font-bold bg-primary text-primary-foreground">
                {member.initials}
              </AvatarFallback>
            </Avatar>

            <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
            <p className="text-primary font-semibold">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutTeamHeroBg})` }}
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
              Meet Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals working tirelessly for forest conservation and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Team Hierarchy */}
      <section className="py-20 bg-background">
        <div ref={teamRef} className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Leadership & Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From the board to management and field staff, our diverse team works together to conserve forests and empower communities.
            </p>
          </div>

          <TeamGrid title="Board Members" members={boardMembers} />
          <TeamGrid title="Management" members={management} />
          <TeamGrid title="Field Team & Support Staff" members={fieldTeam} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutTeam;
