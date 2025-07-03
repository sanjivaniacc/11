import HeroSection from "@/components/team/hero-section";
import TeamDescription from "@/components/team/team-description";
import TeamMembers from "@/components/team/team-members";
import CallToAction from "@/components/team/call-to-action";

export default function Team() {
  return (
    <div className="pt-16">
      <HeroSection />
      <TeamDescription />
      <TeamMembers />
      <CallToAction />
    </div>
  );
}
