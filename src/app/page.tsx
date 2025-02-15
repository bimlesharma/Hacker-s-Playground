// import AboutSection from "@/components/About";
import Schedule from "@/components/Schedule";
import Hero from "@/components/Hero";
import Faqs from "@/components/Faqs";
import VenueReveal from "@/components/Venue";
import AboutTechNexus from "@/components/About-TechNexus";
import AboutGDG from "@/components/About-GDG";
import Theme  from "@/components/Theme";
import Prizes from "@/components/Prizes";
import Swag from "@/components/Swag";
import SponsorSection from "@/components/Sponsors";
import OrganizersSection from "@/components/Oraganizers";


export default function Home() {
  return (
    <>
    <div id="home" className="">
      <Hero />
    </div>
    {/* <SquidGameDivider /> */}
    <div id="about" className="">
      {/* <AboutSection /> */}
      <AboutTechNexus />
      <AboutGDG />
      
    </div>
    <div id="tracks" className="">
      <Theme />
    </div>
    <div id="schedule" className="">
      <Schedule />
    </div>
    <div id="prizes" className="">
      <Prizes />
    </div>
    <div id="swags" className="">
      <Swag />
    </div>
    <div id="sponsors" className="">
      <SponsorSection />
    </div>
    <div id="team" className="">
      <OrganizersSection />
    </div>
    <div id="faqs" className="">
      <Faqs />
    </div>
    <div id="venue" className="">
      <VenueReveal />
    </div>
    </>

  );
}
