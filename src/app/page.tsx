import AboutSection from "@/components/About";
// import SquidGameDivider from "@/components/Divider";
import Hero from "@/components/Hero";


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
    </>

  );
}
