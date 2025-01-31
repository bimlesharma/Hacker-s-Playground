import AboutSection from "@/components/About";
import Schedule from "@/components/Schedule";
import Hero from "@/components/Hero";
import Faqs from "@/components/Faqs";
import VenueReveal from "@/components/Venue";


export default function Home() {
  return (
    <>
    <div id="home" className="">
      <Hero />
    </div>
    {/* <SquidGameDivider /> */}
    <div id="about" className="">
      <AboutSection />
      
    </div>
    <div id="schedule" className="">
      <Schedule />
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
