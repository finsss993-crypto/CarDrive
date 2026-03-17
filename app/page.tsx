import Banner from "./components/Banner";
import FleetSection from "./components/FleetSection";
import LeadForm from "./components/LeadForm";
import Midlle from "./components/Midlle";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <Banner />
      <Midlle />
      <FleetSection />
      <LeadForm />
      <SiteFooter />
    </>
  );
}
