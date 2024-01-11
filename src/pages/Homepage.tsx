import AccordionSection from "../ui/Homepage/AccordionSection/AccordionSection";
import HeroSection from "../ui/Homepage/HeroSection/HeroSection";
import Newsletter from "../ui/Homepage/Newsletter/Newsletter";
import SocialProof from "../ui/Homepage/SocialProof/SocialProof";
import Navbar from "../ui/Navbar/Navbar";

export default function Homepage(): JSX.Element {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AccordionSection />
      <SocialProof />
      <Newsletter />
    </>
  );
}
